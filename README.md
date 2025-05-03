# Feater App

Feater é um aplicativo web que facilita a colaboração entre artistas e beatmakers independentes, permitindo conexões baseadas em localização geográfica e preferências musicais. Inspirado em mecânicas de “match” (like/dislike), o Feater oferece um fluxo simples e intuitivo para encontrar parceiros criativos.

🔗 **Demo online:** https://matheus-almeida27.github.io/feater

---

## 🛠️ Tecnologias

- **Vue 3** – Interface reativa e componentes modulares  
- **Nuxt 3** – Roteamento, geração de páginas estáticas e otimização de performance  
- **Vuetify** – Componentes Material Design para UI consistente  
- **Pinia** – Gerenciamento de estado global  
- **LocalStorage** – Persistência de dados no navegador (usuários, matches, mensagens)

---

## 🚀 Como usar

1. **Acesse o app**  
   Abra o link do demo ou clone este repositório e execute localmente (veja instalação abaixo).

2. **Cadastro / Login**  
   - Na primeira visita, clique em “Cadastrar” e preencha seus dados (nome, função, gêneros, foto).  
   - Depois, use “Login” para entrar com seu perfil salvo em `localStorage`.

3. **Explorar perfis**  
   - Após o login, você verá uma pilha de perfis.  
   - Deslize o card para a direita para “like” ❤️ ou esquerda para “dislike” ❌ para avaliar cada perfil.  
   - Caso receba um like de alguém que você já curtiu, um **match** será criado!

4. **Filtrar por gênero**  
   - No topo da tela, selecione um ou mais gêneros musicais para ajustar as sugestões.

5. **Chat**  
   - Ao ter um match, acesse a aba de “Mensagens”.  
   - Envie e receba mensagens em tempo real (persistidas no `localStorage`).

6. **Editar perfil**  
   - Acesse sua conta e clique em “Editar Perfil” para atualizar foto, biografia, gêneros ou outros dados.

7. **Persistência**  
   - Todas as interações (likes, matches, mensagens) são salvas no `localStorage`.  
   - Mesmo que a página seja recarregada, seus dados permanecem intactos.

---

## 📥 Instalação Local

1. **Clone o repositório**  
   ```bash
   git clone https://github.com/matheus-almeida27/feater.git
   cd feater
   ```

2. **Instale as dependências**  
   ```bash
   npm install
   # ou
   yarn install
   ```

3. **Execute em modo de desenvolvimento**  
   ```bash
   npm run dev
   # ou
   yarn dev
   ```

4. **Acesse**  
   Abra `http://localhost:3000` no seu navegador.

---


## 🤝 Contribuição

1. Faça um fork deste repositório  
2. Crie uma branch para sua feature: `git checkout -b feature/nome-da-feature`  
3. Faça commits das suas mudanças: `git commit -m "Descrição da mudança"`  
4. Envie para sua branch: `git push origin feature/nome-da-feature`  
5. Abra um Pull Request

---

## ✉️ Contato

- Matheus Fontoura de Almeida  
- GitHub: [@matheus-almeida27](https://github.com/matheus-almeida27)  
- E-mail: matheus.fdealmeida27072000@gmail.com
