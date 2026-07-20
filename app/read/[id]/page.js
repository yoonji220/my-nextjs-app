export default async function Read(props) {
  const { id } = await props.params;
  console.log("Read Page 작동");
  return (
    <>
      <h2>Read</h2>
      <p>parameter:{id}</p>
    </>
  );
}
