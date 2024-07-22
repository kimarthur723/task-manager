import {useForm} from "@mantine/form";
import {Group, TextInput} from "@mantine/core";

export default function TaskForm() {
    const form = useForm({
        mode: 'uncontrolled',
        initialValues: {},
    });
    return (
        <form>
            <Group>
                <TextInput>

                </TextInput>
            </Group>

        </form>
    );
}