import React from 'react'

export const ToDoItem = ({ offer, index, onDelete }) => {
    <>
    <li className="list-group" key={index}>
                            <label>{offer.position}</label>
                            <label>{offer.company}</label>
                            <label>{offer.city}</label>
                            <label>{offer.country}</label>
                            <a className="btn-delete" onClick={() => onDelete(index)}><i class="fas fa-trash-alt"></i></a>
                        </li>
                        
        <li className="list-group">
            {offer.name} {offer.bussiness} {offer.city} {offer.country}
            <button type="button" className="btn-delete" onClick={() => onDelete(index)}>Eliminar</button>
        </li>
    </>
};