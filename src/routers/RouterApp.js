import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import styled from 'styled-components'
import Programs from '../pages/Programs'
import Tablas from '../pages/Tablas'

const PageInitial = styled.div`
    margin: 2rem;
`

const RouterApp = () => {
  return (
    <PageInitial>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Programs />} />
                <Route path="/programas" element={<Programs />} />
                <Route path="/tablas" element={<Tablas />} />
            </Routes>
        </BrowserRouter>
    </PageInitial>
  )
}

export default RouterApp