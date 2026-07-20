"use client";
export default function Create() {
  console.log("Create Page 레이아웃 작동");
  return (
    <>
      <h3 style={styles.title}>Create Form</h3>
      <form
        action=""
        onSubmit={e => {
          e.preventDefault();
          const title = e.target.title.value;
          const message = e.target.message.value;
        }}
      >
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            placeholder="글 제목을 입력해주세요"
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
