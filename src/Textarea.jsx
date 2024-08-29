export default function Textarea() {
  return (
    <textarea
      onChange={(e) => {
        console.log("The textarea was changed");
        console.log("The new value is: " + e.target.value);
      }}
      className="textarea"
    />
  );
}
