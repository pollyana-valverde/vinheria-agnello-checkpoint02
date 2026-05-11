# vinheria-agnello-checkpoint02
Checkpoint 02 – Sistema de Avaliação de Estoque e Tendência de Vinhos

# Vinharia Agnello

## Descrição

Vinharia Agnello é um site para uma loja de vinhos online. O projeto apresenta uma plataforma completa de e-commerce com catálogo de produtos, carrinho de compras e informações sobre a empresa.

## Estrutura do Projeto

- **Home (`index.html`):** Página principal do site com acesso aos principais recursos.

## Estrutura de Arquivos

```
vinharia-agnello/
├── index.html                 # Página inicial
├── README.md                  # Documentação do projeto
├── src/
│   ├── pages/                 # Páginas HTML
│   │   ├── sobre-nos.html
│   │   ├── contato.html
│   │   ├── produtos.html
│   │   ├── detalhe-produto.html
│   │   └── carrinho-compra.html
│   ├── styles/                # Arquivos de estilo CSS
│   │   ├── index.css          # CSS principal
│   │   ├── efeitos.css        # Efeitos visuais (pseudo-classes, pseudo-elementos, animações, transformações)
│   │   ├── home.css
│   │   ├── produtos.css
│   │   ├── detalhes-produto.css
│   │   ├── carrinho-compra.css
│   │   ├── contato.css
│   │   ├── sobre-nos.css
│   │   ├── colors.css
│   │   └── galeria.css
│   └── scripts/               # Arquivos JavaScript
│       ├── index.js
│       └── produtos.js
```

## Funcionalidades

- Permite o cadastro de vários vinhos em sequência, perguntando ao final se deseja cadastrar outro.
- Valida entradas
- Verifica se o estoque está baixo (menos de 5)
- Classifica o vinho (jovem, amadurecido, antigo)
- Mostra os dados no console com aviso por alert()
- Resultado final:
    - Quantos cadastros foram feitos
    - Quantos vinhos têm estoque baixo
    - O vinho com a safra mais antiga (comparando manualmente dentro das iterações)

## Integrantes

- Pollyana Valverde
- Luana Lopes Sventkauskas
- João Fernando Gonçalves Senziani
- Arthur Nepomuceno Dias Gomes
- Yan

## Link do Site Publicado

`https://pollyana-valverde.github.io/vinharia-agnello/`

## Repositório

[GitHub - vinharia-agnello](https://github.com/pollyana-valverde/vinharia-agnello)
