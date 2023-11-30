import React from 'react'
import './Home.css'

function Home() {
  return (
    <div>
      <ul class="nav justify-content-end bg-secondary">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Contact</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>

      <h1>Welcome</h1>
    </div>



  )
}

export default Home