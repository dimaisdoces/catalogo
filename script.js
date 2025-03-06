body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background: #fff;
}

.header {
    background-color: #cd1a1f;
    color: white;
    text-align: center;
    padding: 50px 20px;
    min-height: calc(100vh - 50px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.header img {
    max-width: 20%;
    height: auto;
    border-radius: 0; /* Remove qualquer arredondamento */
    width: auto; /* Garante que a largura seja automática */
    max-height: none; /* Remove a restrição de altura máxima */
}

.header .header-slogan {
    color: white;
    font-size: 1.5em;
    font-family: 'Nova Fonte', cursive; /* Substitua 'Nova Fonte' pelo nome da fonte desejada */
    margin-top: 10px;
}

.credit-footer {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background: none;
    text-align: center;
    padding: 10px 0;
    border-top: none;
}

.credit-text {
    font-size: 13px;
    color: white;
}

.informacoes {
    margin-top: 20px;
    font-family: Arial, sans-serif;
    color: white;
}

button {
    background: #cd1a1f;
    color: white;
    border: none;
    padding: 10px;
    cursor: pointer;
}

button:hover {
    background: #000000;
}

button:focus {
    outline: 2px solid black;
}

.catalog-button {
    background: #06864b;
}

.catalog-button:hover {
    background: #000000;
}

.catalogo {
    padding: 20px;
    margin-bottom: 80px;
    background-color: #f0f0f0;
    overflow: auto;
}

.grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 10px;
}

.produto {
    border: 1px solid #ccc;
    padding: 10px;
    text-align: center;
    background: #fff;
    margin-bottom: 20px;
}

.produto img {
    max-width: 100%;
    height: auto;
    margin-bottom: 10px;
    max-height: 100px;
    object-fit: cover;
}

.produto h3 {
    margin-top: 10px;
    font-size: 1em;
}

.produto p {
    margin-top: 10px;
    font-size: 0.9em;
}

.cart-icon {
    position: fixed;
    top: 15px;
    right: 20px;
    cursor: pointer;
    font-size: 24px;
    color: rgb(34, 31, 31);
    z-index: 1001;
}

.cart-icon span {
    font-size: 14px;
    position: absolute;
    top: -10px;
    right: -10px;
    background-color: #cd1a1f;
    color: white;
    padding: 2px 6px;
    border-radius: 50%;
}

.cart-details {
    display: none;
    position: fixed;
    top: 50px;
    right: 20px;
    background: white;
    border: 1px solid #ccc;
    padding: 10px;
    max-width: 400px;
    overflow-y: auto;
    overflow-x: hidden;
    max-height: 400px;
    font-size: 14px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

textarea#orderNotes {
    width: calc(100% - 20px);
    height: 80px;
    margin-top: 10px;
    padding: 10px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 5px;
    resize: none;
}

#finalMessage {
    margin-top: 20px;
    padding: 10px;
    background: #f0f0f0;
    border: 1px solid white;
    border-radius: 5px;
    text-align: center;
}

#finalMessage p {
    margin: 10px 0;
    font-size: 16px;
    color: white;
}

.cart-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 5px;
}

.cart-item p {
    flex: 1;
}

.adjust-buttons {
    display: flex;
    align-items: center;
}

.adjust-buttons span {
    color: #cd1a1f;
    margin: 0 5px;
    font-size: 18px;
    cursor: pointer;
}

.remove-item {
    color: #cd1a1f;
    cursor: pointer;
    font-weight: bold;
    font-size: 18px;
    margin-left: 10px;
}

.wholesale-message {
    color: #cd1a1f;
    margin-top: 10px;
}

.footer {
    background: #f8f8f8;
    padding: 10px 0;
    text-align: center;
    border-top: 1px solid #e7e7e7;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: auto;
    z-index: 1000;
}

.footer .social-media {
    display: flex;
    justify-content: center;
    align-items: center;
}

.footer .social-media p {
    margin: 0 10px 0 0;
    font-weight: bold;
}

.footer .social-media a {
    margin: 0 10px;
}

.footer .social-media i {
    font-size: 25px;
}

.instagram-icon {
    color: #E4405F;
}

.instagram-icon:hover {
    color: #C13584;
}

.whatsapp-icon {
    color: #25D366;
}

.whatsapp-icon:hover {
    color: #128C7E;
}

.clock-icon {
    color: #b7c032;
}

.clock-icon:hover {
    color: #000000;
}

.pagination {
    text-align: center;
    margin-top: 20px;
}

.pagination button {
    background: #cd1a1f;
    color: white;
    border: none;
    padding: 10px;
    cursor: pointer;
    margin: 5px;
}

.pagination button:hover {
    background: #000000;
}

@media (max-width: 768px) {
    .grid {
        grid-template-columns: repeat(2, 1fr);
    }
    .cart-icon {
        font-size: 28px;
    }
}

@media (max-width: 480px) {
    .grid {
        grid-template-columns: 1fr;
    }
    .header {
        padding: 30px 10px;
    }
    .header .header-slogan {
        font-size: 1.5em;
    }
    .catalog-button {
        padding: 10px 15px;
        font-size: 1em;
    }
    .produto h3 {
        font-size: 1em;
    }
    .produto p {
        font-size: 0.9em;
    }
    .produto button {
        font-size: 0.9em;
        padding: 8px;
    }
    .footer .social-media i {
        font-size: 24px;
    }
}

.customer-name {
    margin-top: 10px;
}

.customer-name p {
    margin: 0;
    font-weight: bold;
}

.customer-name input {
    margin-top: 10px;
    padding: 10px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

.customer-name button {
    margin-top: 10px;
    padding: 10px;
    background-color: #cd1a1f;
    color: white;
    border: none;
    cursor: pointer;
    font-size: 14px;
    width: 60px;
    height: 35px;
    border-radius: 8px; /* Adiciona cantos arredondados */
    transition: background-color 0.3s ease; /* Adiciona uma transição suave ao mudar a cor */
}

.customer-name button:hover {
    background-color: #000000;
}
