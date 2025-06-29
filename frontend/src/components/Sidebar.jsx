import React, { useEffect } from 'react'
import { useChatStore } from '../store/useChatStore'
import SidebarSkeleton from './skeletons/SidebarSkeleton';

const Sidebar = () => {

    const { users, isUsersLoading, getUsers, selectedUser, setSelectedUser } = useChatStore();

    const onlineUsers = [];

    useEffect(() => {
        getUsers();
    }, [getUsers]);

    if(isUsersLoading) return <SidebarSkeleton/>

  return (
    <div>Sidebar</div>
  )
}

export default Sidebar