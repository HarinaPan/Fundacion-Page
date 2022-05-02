import React from 'react';

import { render, screen } from '@testing-library/react';

import AdminPage from "./AdminPage"
beforeEach(()=> {
    render(<AdminPage/>)
})
describe('AdminPage', ()=> {
    it('must display a title',()=> {
       
        expect(screen.queryByText(/Bienvenido Admin/i)).toBeInTheDocument();
    })
    it('must display a Donaciones section', ()=> {
      
        expect(screen.queryByText(/historial de donaciones/i)).toBeInTheDocument();
    })
    it('must display a members section', ()=> {
       
        const sectionTitle = screen.queryByText(/miembros/i)
        expect(sectionTitle).toBeInTheDocument();
    })
})
describe('Donantors section', ()=> {
    it('must contains nombre, apellido, email, metodo de pago and monto', ()=> {
        const firstCol = screen.queryByText(/nombre/i)
        const secondCol = screen.queryByText(/apellido/i)
        const thirdCol = screen.queryByText(/email/i)
        const forthCol = screen.queryByText(/metodo de pago/i)
        const fifthCol = screen.queryByText(/monto/i)
        expect(firstCol).toBeInTheDocument();
        expect(secondCol).toBeInTheDocument();
        expect(thirdCol).toBeInTheDocument();
        expect(forthCol).toBeInTheDocument();
        expect(fifthCol).toBeInTheDocument();
    })
})
describe('Members Section', ()=> {
    it('should contains nombre and rol columns', ()=>{
        const firstCol = screen.queryByText(/name/i)
        const secondCol = screen.queryByText(/rol/i)
        expect(firstCol).toBeInTheDocument();
        expect(secondCol).toBeInTheDocument();
    })
})