# 🎬 CynclyFlix — Catálogo de Filmes em React + TypeScript

Este projeto nasceu do desejo de construir uma aplicação de catálogo de filmes moderna, performática e extremamente limpa. Mais do que apenas listar cards na tela, meu objetivo principal aqui foi aplicar boas práticas de arquitetura frontend, componentização inteligente e tipagem estrita com TypeScript.

O projeto foi batizado de **CynclyFlix** como uma demonstração prática do meu alinhamento técnico e entusiasmo com as stacks de engenharia de ponta.

---

## 🛠️ O que foi utilizado no desenvolvimento?

Optei por tecnologias modernas que garantem velocidade de desenvolvimento e uma ótima experiência para o usuário:

- **React.js** (utilizando hooks modernos como `useState` e `useEffect` para controle de estados).
- **TypeScript** (com modo estrito ativado, garantindo que toda a aplicação e os dados estejam devidamente tipados).
- **Vite** (como ferramenta de build, proporcionando um ambiente de desenvolvimento instantâneo).
- **CSS3 Puro** (separado em módulos externos, utilizando técnicas modernas de layout como Flexbox e CSS Grid para total responsividade).
- **SVG Dinâmico** (renderização de logotipos e ícones direto via vetor, otimizando o carregamento da página).

---

## 💡 Decisões Técnicas e Evolução do Código (O "Porquê" das coisas)

Durante o desenvolvimento deste projeto, passei por desafios reais que me fizeram tomar decisões comuns no dia a dia de um time de engenharia:

1. **Separação de Responsabilidades (Clean Code):** No início, os dados e estilos estavam todos concentrados em um único arquivo. Para tornar o código escalável e fácil de manter, fiz uma refatoração completa: isolei a tipagem e os dados no arquivo `moviesData.ts`, os estilos visuais no `App.css` e os componentes visuais de forma independente.
2. **Arquitetura Offline Resiliente (Mock Data):** Pensando na resiliência da aplicação caso uma API de terceiros falhe ou bloqueie conexões por excesso de requisições, estruturei um banco de dados local robusto. O sistema simula o comportamento de uma requisição real de rede (com direito a um pequeno delay visual de *loading*), garantindo estabilidade 100% offline.
3. **Usabilidade Avançada (UX):** Melhorei o fluxo de busca encapsulando a caixa de pesquisa dentro de uma tag de formulário. Com isso, o usuário não precisa necessariamente clicar no botão com o mouse; ele pode apenas digitar o nome do filme e apertar "Enter" no teclado.

---

## 📐 Como rodar o projeto localmente

Caso queira clonar este repositório e testar na sua máquina, siga os passos abaixo:

1. Certifique-se de ter o **Node.js** instalado.
2. Clone este repositório para o seu computador.
3. No terminal da pasta do projeto, instale as dependências:
   ```bash
   npm install
   ```
4. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
5. Abra o link gerado no terminal (geralmente `http://localhost:5173`) no seu navegador.

---

## 👨‍💻 Sobre Mim

Sou um desenvolvedor focado na stack JavaScript e TypeScript, com forte inclinação para entregar interfaces ricas, códigos organizados e que resolvam problemas de verdade. Estou constantemente estudando para elevar meu nível técnico e buscando oportunidades de somar em times multidisciplinares focados em alta performance.

- **LinkedIn:** www.linkedin.com/in/robsonarrudadev


