# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# Locall

MVP de um aplicativo web para turismo em Lages-SC, oferecendo cupons de desconto em comércios locais para turistas que visitarem pontos turísticos da cidade.

## Como rodar o projeto

1. Instale as dependências:
   ```bash
   npm install
   ```
2. Adicione sua chave da API do Google Maps:
   - No arquivo `src/components/MapView.jsx`, substitua `SUA_GOOGLE_MAPS_API_KEY` pela sua chave válida.
3. Adicione o arquivo KML dos pontos turísticos:
   - Coloque o arquivo KML exportado do Google My Maps na pasta `public/` e renomeie para `lages-pontos.kml` (ou ajuste o nome no código se desejar).
4. Rode o projeto:
   ```bash
   npm run dev
   ```

## Tecnologias
- React + Vite
- TailwindCSS
- @react-google-maps/api
- localStorage

## Estrutura de pastas
- `src/components/`: Componentes reutilizáveis (Mapa, Lista de Pontos, Cupons)
- `public/`: Arquivos estáticos (KML, imagens)

---
MVP sem autenticação. Dados de check-in e cupons são salvos no localStorage do navegador.
