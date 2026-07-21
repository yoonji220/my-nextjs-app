"use client";
import { useRouter, useParams } from "next/navigation";
import { useState, useEffect } from "react";

export default function Update() {
  const router = useRouter();
  const { id } = useParams();
  // const [topic, setTopic] = useState({ title: "", message: "" });
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/topics/${id}`)
      .then(res => res.json())
      .then(data => {
        setTitle(data.title);
        setMessage(data.message);
      });
  }, [id]);

  // useEffect(() => {
  //   fetch(`http://localhost:9999/topics/${id}`)
  //     .then(res => res.json())
  //     .then(data => setTopic(data));
  // }, [id]);

  console.log("Update Page 작동");

  // const handleChange = e => {
  //   setTopic(prev => ({
  //     ...prev,
  //     [e.target.name]: e.target.value,
  //   }));
  // };
  const handleChange = e => {
    if (e.target.name === "title") {
      setTitle(e.target.value);
    } else if (e.target.name === "message") {
      setMessage(e.target.value);
    }
  };

  return (
    <>
      <h3 style={styles.title}>Update Form</h3>
      <form
        action=""
        onSubmit={e => {
          e.preventDefault();
          const options = {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              title,
              message,
            }),
          };
          fetch(`${process.env.NEXT_PUBLIC_API_URL}/topics/${id}`, options)
            .then(res => res.json())
            .then(result => {
              router.push(`/read/${result.id}`);
            });
        }}
      >
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            placeholder="글 제목을 입력해주세요"
            // value={topic.title}
            value={title}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">
            Message
          </label>
          <textarea
            name="message"
            className="form-control"
            id="message"
            rows="3"
            // value={topic.message}
            value={message}
            onChange={handleChange}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          입력
        </button>
      </form>
    </>
  );
}

const styles = {
  title: {
    color: "green",
  },
};
