import React, { useState } from 'react'
import "./userCard.css";
const UserCard = (props) => {

    const [current, setCurrent] = useState({})

    return (
        <>
            <div className='main-dash' >
                <div className='aside-dash'>


                </div>

                <div className='content-dash'>

                    <div className='table-dash'>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <h3>your client</h3>
                            <div>search</div>
                        </div>
                        <div className='table-choix' style={{ display: "flex", padding: "0.5rem 3rem", gap: "3rem" }}  >
                            <h5 onClick={(e) => { props.setBy("type"); props.setValue("") }}>all</h5>
                            <h5 onClick={(e) => { props.setBy("type"); props.setValue("regular") }}>regular</h5>
                            <h5 onClick={(e) => { props.setBy("type"); props.setValue("fashionista") }}>fashionista</h5>
                            <h5 onClick={(e) => { props.setBy("type"); props.setValue("brand") }}>brand</h5>
                        </div>
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">First</th>
                                    <th scope="col">Last</th>
                                    <th scope="col">Handle</th>
                                    <th scope="col">action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {props.users.map((e, i) => {
                                    return (
                                        <tr key={i} onClick={() => { setCurrent(e) }}>
                                            <th scope="row">{e.id} </th>
                                            <td>{e.firstName}</td>
                                            <td>{e.lastName}</td>
                                            <td>{e.type}</td>
                                            <td> <i className="fa-solid fa-user"></i>  <i className="fa-solid fa-pencil"></i>  <i className="fa-regular fa-trash-can" data-bs-toggle="modal" data-bs-target="#exampleModal"></i></td>

                                        </tr>

                                    )
                                })}

                            </tbody>
                        </table>
                    </div>

                    <div className='card-dash'>
                        <div className='profile-photo'>
                            <img className='taswira' src={current.profileImage} alt="profile" />
                        </div>
                        <div style={{ width: "100%", height: "4rem" }}></div>
                        <div className='profile-info'>
                            <h4>{current.firstName + " " + current.lastName}</h4>
                            <h4>{current.dateOfBirth}</h4>
                        </div>

                        <div className='card-titels-content' >
                            <p><bold>email: </bold> {current.email}</p>
                            <p><bold>type: </bold> {current.type}</p>
                            <p><bold>followers:</bold> {current.followers}</p>
                        </div>

                    </div>
                </div>
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="exampleModalLabel"> !!!warring</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                are you sure you wan't to delete this item
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-primary" data-bs-dismiss="modal">NO</button>
                                <button type="button" class="btn btn-warning" onClick={()=>props.deleteUser(current.id)}>Yes</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default UserCard;