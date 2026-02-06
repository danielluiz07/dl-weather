## DL weather - Consumo de API Com Next.js

![React.js](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=white)
![Next.js](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)

![Project Preview](./public/preview.png)

> Consumo de uma API de metereologia, a qual disponibiliza dados essencias e previsões de curto e longo prazo. O DL weather captura esses dados, processa-os e exibi de maneira intuitiva para o usuário, projeto desenvolvido para fins de aprendizado profissional. Onde no mesmo foi utilizado tecnologias recentes e rápidas para melhor experiência do usuário.

## Tecnologias Utilizadas

O projeto utiliza uma stack robusta focada em escalabilidade:

| Tecnologia | Finalidade |
| :--- | :--- |
| **Next.js 16** | Framework React com App Router e Server Components. |
| **TypeScript** | Garantia de tipos e segurança no fluxo de dados da API. |
| **Tailwind CSS** | Estilização utilitária e design responsivo. |
| **Lucide React** | Biblioteca de ícones leves e modernos. |
| **OpenWeather API** | Fonte de dados climáticos globais. |

## Aprendizados Técnicos

Este projeto foi fundamental para colocar em prática conceitos avançados:

* **Server Components vs Client Components:** Entendimento de quando delegar o processamento ao servidor para melhorar o LCP.
* **Data Fetching & Cache:** Uso do `fetch` com revalidação de tempo (`next: { revalidate }`) para otimizar chamadas repetitivas à API.
* **Manipulação de URL Params:** Sincronização da barra de busca com os parâmetros da URL para permitir compartilhamento de buscas específicas.
* **Segurança com Environment Variables:** Configuração correta de variáveis `.env` para proteger chaves de API sensíveis.

## Como Executar o Projeto

1. **Clone o repositório:**
   ```bash
   git clone [https://github.com/danielluiz07/dl-weather.git](https://github.com/danielluiz07/dl-weather.git)
   
2. **Instale as dependências:**
   ```bash
   npm install
   
3. **Configure as variáveis de ambiente:** Crie um arquivo .env na raiz e adicione sua chave:
   ```bash
   NEXT_PUBLIC_WEATHER_API_KEY=sua_chave_da_openweather
   
4. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev

Acesse http://localhost:3000 no seu navegador
