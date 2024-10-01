import { Button, TextInput, Group } from "@mantine/core";
import { useField } from "@mantine/form";

function TodoForm({ addTask }) {
  const validateInput = (value) => {
    if (value.trim() === "") {
      return "Task cannot be empty";
    }

    addTask(value);
    field.reset();
  };
  const field = useField({
    initialValue: "",
    validate: (value) =>
      value.trim() !== "" ? validateInput(value) : "Task cannot be empty",
  });

  return (
    <Group position="apart">
      <TextInput
        {...field.getInputProps()}
        placeholder="Add a new task"
        mb="md"
        flex={1}
        style={{ marginTop: 17 }}
        onKeyDown={(event) => event.key === "Enter" && field.validate()}
      />
      <Button onClick={field.validate}>Add task</Button>
    </Group>
  );
}

export default TodoForm;
