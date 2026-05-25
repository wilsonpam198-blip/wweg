# Distribuidora N1 - Site de Vendas de Eletrônicos

Site profissional de vendas de eletrônicos para a Distribuidora N1 LTDA, desenvolvido em HTML, CSS e JavaScript puro, pronto para GitHub Pages.

## 📋 Informações da Empresa

- **Razão Social:** Distribuidora N1 LTDA
- **CNPJ:** 61.956.624/0001-71
- **Endereço:** Rua Vinte e Quatro de Maio, 822 - Loja 16, Benfica, Fortaleza, CE 60020-001
- **Telefone:** (85) 99924-6433
- **Email:** suporteonlinenumberone@gmail.com

## 🌐 Características

✅ Site HTML/CSS/JavaScript puro (sem dependências)
✅ Totalmente responsivo (mobile, tablet, desktop)
✅ Catálogo de 12 produtos (Smartphones, Laptops, Acessórios)
✅ Filtro de categorias funcional
✅ Formulário de contato
✅ Banner de consentimento de cookies
✅ 4 páginas legais (Privacidade, Termos, Cookies, Aviso Legal)
✅ Conformidade Google Ads
✅ SEO otimizado (robots.txt, sitemap.xml, meta tags)
✅ Sem redirecionamentos externos
✅ Sem botão WhatsApp

## 📁 Estrutura de Arquivos

```
distribuidora-n1-html/
├── index.html              # Página principal
├── css/
│   └── style.css          # Estilos CSS
├── js/
│   └── main.js            # JavaScript funcional
├── pages/
│   ├── politica-privacidade.html
│   ├── termos-servico.html
│   ├── politica-cookies.html
│   └── aviso-legal.html
├── robots.txt             # SEO
├── sitemap.xml            # Mapa do site
├── .gitignore
└── README.md
```

## 🚀 Como Usar

### 1. Clonar ou Baixar o Repositório

```bash
git clone https://github.com/seu-usuario/distribuidora-n1.git
cd distribuidora-n1
```

### 2. Abrir Localmente

Simplesmente abra o arquivo `index.html` em seu navegador:

```bash
# No Windows
start index.html

# No macOS
open index.html

# No Linux
xdg-open index.html
```

Ou use um servidor local:

```bash
# Python 3
python -m http.server 8000

# Node.js (com http-server)
npx http-server
```

### 3. Publicar no GitHub Pages

1. Crie um repositório no GitHub
2. Faça push dos arquivos:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/seu-usuario/seu-repositorio.git
git push -u origin main
```

3. Vá em Settings > Pages e selecione "Deploy from a branch"
4. Selecione a branch `main` e a pasta `/ (root)`
5. Clique em Save

## 🎨 Personalização

### Alterar Cores

Edite as variáveis CSS em `css/style.css`:

```css
:root {
    --primary-color: #0F3A7D;      /* Azul principal */
    --secondary-color: #FF6B35;    /* Laranja */
    --accent-color: #FFB703;       /* Amarelo */
}
```

### Adicionar Produtos

Edite o array `produtos` em `js/main.js`:

```javascript
const produtos = [
    {
        id: 1,
        nome: 'Nome do Produto',
        categoria: 'smartphones',
        descricao: 'Descrição',
        preco: 'R$ 1.999',
        emoji: '📱'
    },
    // ... mais produtos
];
```

### Alterar Informações da Empresa

Edite os dados em `index.html`:

- Telefone: `(85) 99924-6433`
- Email: `suporteonlinenumberone@gmail.com`
- Endereço: Atualize no HTML

## 📱 Responsividade

O site é totalmente responsivo e funciona perfeitamente em:
- Desktops (1920px+)
- Tablets (768px - 1024px)
- Smartphones (320px - 767px)

## 🔒 Conformidade Google Ads

✅ Política de Privacidade
✅ Termos de Serviço
✅ Política de Cookies
✅ Aviso Legal
✅ Meta tags de segurança
✅ robots.txt
✅ sitemap.xml

## 📊 SEO

- Meta tags otimizadas
- Open Graph tags
- Sitemap XML
- robots.txt
- URLs amigáveis
- Estrutura semântica HTML

## 🛠️ Tecnologias

- HTML5
- CSS3
- JavaScript (Vanilla)
- Git/GitHub

## 📄 Licença

Todos os direitos reservados © 2025 Distribuidora N1 LTDA

## 📞 Suporte

Para dúvidas ou sugestões:
- **Email:** suporteonlinenumberone@gmail.com
- **Telefone:** (85) 99924-6433

---

**Desenvolvido com ❤️ para Distribuidora N1 LTDA**
