'use client';

import { Button, Modal, TextInput, ActionIcon, Textarea } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconPlus } from '@tabler/icons-react';

export default function TasksPage() {
    const [opened, { open, close }] = useDisclosure(false);
    return (
        <>
            <Modal
              opened={opened}
              onClose={close}
              title="Add Task"
              centered
              size="md"
            >
                <TextInput label="Task name" withAsterisk />
                <Textarea label="description" />
                <Button>Add</Button>
            </Modal>
                <ActionIcon onClick={open}>
                    <IconPlus />
                </ActionIcon>
        </>
    );
}
