export default async function Read(props) {
  const { id } = await props.params;

  const response = await fetch(`http://localhost:9999/topics/${id}`);
  const topic = await response.json();

  console.log("Read Page 작동");

  return (
    <>
      <h2>{topic.title}</h2>
      <p>{topic.message}</p>
    </>
  );
}