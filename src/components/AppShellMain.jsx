import React, { useState } from 'react';
import { Tree, Group, Popover, TextInput } from '@mantine/core';
import { fileData } from './../data/fileData';
import classes from './Demo.module.css';
import { Folder, FolderOpen, Ellipsis, Pencil, Trash } from 'lucide-react';
import { CssIcon, NpmIcon, TypeScriptCircleIcon } from '@mantinex/dev-icons';
import { Menu } from '@mantine/core';
import { isFileFolderEdit, disableEdit } from './../redux/slices/FileExpoSlice';
import { useDispatch, useSelector } from 'react-redux';

function AppShellMain() {
  const dispatch = useDispatch();
  const [opened, setOpened] = useState(false);
  const { isEdit } = useSelector((state) => state.file);
  console.log(isEdit);

  const handleDeleteClick = (e, node, expanded, hasChildren) => {
    e.stopPropagation();
    dispatch(disableEdit());
    console.log('clicked', node);
    console.log(expanded);
    console.log(hasChildren);
    const removeFile = fileData.findIndex((data) => {
      return data.id === node.id;
    });
    console.log(removeFile);
    fileData.splice(removeFile, 1);
  };

  const handleEditClick = (e, node, expanded, hasChildren) => {
    console.log(e);
    e.stopPropagation();
    setOpened((o) => !o);
    dispatch(isFileFolderEdit());
  };
  function FileIcon({ name, isFolder, expanded }) {
    if (name.endsWith('package.json')) {
      return <NpmIcon size={14} />;
    }

    if (
      name.endsWith('.ts') ||
      name.endsWith('.tsx') ||
      name.endsWith('tsconfig.json')
    ) {
      return <TypeScriptCircleIcon size={14} />;
    }

    if (name.endsWith('.css')) {
      return <CssIcon size={14} />;
    }

    if (isFolder) {
      return expanded ? (
        <FolderOpen className="text-yellow-500" size={16} />
      ) : (
        <Folder className="text-yellow-500" size={16} />
      );
    }

    return null;
  }

  function Leaf({ node, expanded, hasChildren, elementProps, ...props }) {
    return (
      <Group gap={5} {...elementProps}>
        <FileIcon
          name={node.value}
          isFolder={hasChildren}
          expanded={expanded}
        />
        <span onClick={() => dispatch(disableEdit())}>{node.label}</span>
        {isEdit && (
          <TextInput placeholder="Name" size="xs" value={node.label} />
        )}

        <Menu>
          <Menu.Target>
            <Ellipsis onClick={(e) => e.stopPropagation()} />
          </Menu.Target>
          <Menu.Dropdown>
            <Menu.Item
              onClick={(e) => handleEditClick(e, node, expanded, hasChildren)}
              leftIcon={<Pencil />}
            >
              Edit
            </Menu.Item>
            <Menu.Item
              leftIcon={<Trash />}
              onClick={(e) => handleDeleteClick(e, node, expanded, hasChildren)}
              color="red"
            >
              Delete
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>
      </Group>
    );
  }

  return (
    <div>
      <Tree
        classNames={classes}
        data={fileData}
        renderNode={(payload) => {
          return <Leaf {...payload} />;
        }}
      />
    </div>
  );
}

export default AppShellMain;
