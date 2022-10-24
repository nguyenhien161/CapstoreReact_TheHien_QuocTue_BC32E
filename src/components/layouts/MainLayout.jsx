import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header, Footer } from '../Molecules'
import styled from 'styled-components'

const MainLayout = () => {
    return (
        <Container className="MainLayout">
            <Header />
            <main className="main-content">
                <Outlet />
            </main>
            <Footer />
        </Container>
    )
}

export default MainLayout
