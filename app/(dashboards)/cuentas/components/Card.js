import React from "react";
import '../style.css'

export const Card = ({numeroCard}) => {
    const principal = numeroCard === '001-0000001/1';
  return (
    <>
          <div class="card">
            <div class="info-card">
              <div class="top-card">
                <h1>{numeroCard}</h1>
                {principal &&<p class="principal">Principal</p>}
              </div>

              <sub>SALDO TOTAL</sub>

              <div class="bot-card">
                <div>
                  <p id="saldo-disponible-card" class="info-total"></p>
                </div>
                <div class="cont-usd">
                  <p id="usd-disponible-card" class="info-total"></p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon flecha icon-tabler icon-tabler-arrow-badge-right"
                    width="44"
                    height="44"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#000000"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M13 7h-6l4 5l-4 5h6l4 -5z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
    </>
  );
};