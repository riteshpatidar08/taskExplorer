import { AppShell, Burger } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import AppShellMain from './../components/AppShellMain'
export default function Dashboardlayout() {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: 'sm',
        collapsed: { mobile: !opened },
      }}
      padding="md"
    >
      <AppShell.Header>
        <Burger
          opened={opened}
          onClick={toggle}
          hiddenFrom="sm"
          size="sm"
        />
        <div className='text-2xl mx-10 mt-4 font-bold'>File Explorer</div>
      </AppShell.Header>

      <AppShell.Navbar p="md">   <AppShellMain/></AppShell.Navbar>

      <AppShell.Main>
     
      </AppShell.Main>
    </AppShell>
  );
}