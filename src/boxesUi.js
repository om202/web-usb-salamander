import Box from "./box";

export default function BoxesUi() {
  return (
    <div className="boxesUiMain">
      <Box music="Drum #1" circular={true}/>
      <Box music="Drum #2" circular={true}/>

      <Box music="Drum #1" />
      <Box music="Drum #2" />
      <Box music="Drum #3" />
      <Box music="Drum #4" />
      <Box music="Drum #5" />
      <Box music="Drum #6" />
    </div>
  );
}
