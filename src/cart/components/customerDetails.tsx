import { Fieldset, Group, TextInput } from '@mantine/core'
import React from 'react'

export const CustomerDetails: React.FC = () => {
  return (
    <Fieldset legend="Customer Details" p={10}>
        <Group grow>
            <TextInput label="Name" radius="md" placeholder='Enter customer name'/>
            <TextInput label="Phone Number" radius="md" placeholder='Enter customer phone number'/>
        </Group>
    </Fieldset>
  )
}
