'use client';

import { ActionIcon, Button, Group, Modal, Textarea, TextInput } from '@mantine/core';
import { IconPlus } from '@tabler/icons-react';
import { useDisclosure } from '@mantine/hooks';
import { useForm } from '@mantine/form';
import TableSelection from '@/app/tasks/TableSelection';

export default function TasksPage() {
    const [opened, { open, close }] = useDisclosure(false);
    const form = useForm({
        mode: 'uncontrolled',
        initialValues: {
            name: '',
            description: '',
        },
        validate: {
            name: (value) => value.length <= 0 ? 'Enter a task name' : null,
        },
    });

    return (
        <>
            <Modal
              opened={opened}
              onClose={close}
              title="Add Task"
              centered
              size="md"
            >
                <form onSubmit={form.onSubmit((values) => {
                    console.log(values);
                    form.reset();
                    close();
                })}>
                    <TextInput
                      label="Task name"
                      withAsterisk
                      key={form.key('name')}
                      {...form.getInputProps('name')}
                    />
                    <Textarea
                      label="Description"
                      mt="md"
                      key={form.key('description')}
                      {...form.getInputProps('description')}
                    />
                    <Group justify="flex-end" mt="md">
                        <Button type="submit">Add</Button>
                    </Group>
                </form>
            </Modal>
            <ActionIcon onClick={open}>
                <IconPlus />
            </ActionIcon>
            <TableSelection />
        </>
    );
}
