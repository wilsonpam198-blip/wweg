// ============================================
// DADOS DE PRODUTOS
// ============================================

const produtos = [
    // Smartphones
    {
        id: 1,
        nome: 'iPhone 15 Pro',
        categoria: 'smartphones',
        descricao: 'Smartphone premium com câmera avançada',
        preco: 'R$ 7.999',
        emoji: '📱'
    },
    {
        id: 2,
        nome: 'Samsung Galaxy S24',
        categoria: 'smartphones',
        descricao: 'Tela AMOLED de alta resolução',
        preco: 'R$ 5.499',
        emoji: '📱'
    },
    {
        id: 3,
        nome: 'Google Pixel 8',
        categoria: 'smartphones',
        descricao: 'IA integrada para fotografia',
        preco: 'R$ 4.999',
        emoji: '📱'
    },
    {
        id: 4,
        nome: 'Xiaomi 14',
        categoria: 'smartphones',
        descricao: 'Processador Snapdragon 8 Gen 3',
        preco: 'R$ 3.999',
        emoji: '📱'
    },

    // Laptops
    {
        id: 5,
        nome: 'MacBook Pro 16"',
        categoria: 'laptops',
        descricao: 'Processador M3 Max, 36GB RAM',
        preco: 'R$ 19.999',
        emoji: '💻'
    },
    {
        id: 6,
        nome: 'Dell XPS 15',
        categoria: 'laptops',
        descricao: 'Intel i9, RTX 4090, 32GB RAM',
        preco: 'R$ 15.999',
        emoji: '💻'
    },
    {
        id: 7,
        nome: 'Lenovo ThinkPad X1',
        categoria: 'laptops',
        descricao: 'Processador Intel Core i7',
        preco: 'R$ 8.999',
        emoji: '💻'
    },
    {
        id: 8,
        nome: 'ASUS ROG Gaming',
        categoria: 'laptops',
        descricao: 'RTX 4080, 32GB RAM, 1TB SSD',
        preco: 'R$ 12.999',
        emoji: '💻'
    },

    // Acessórios
    {
        id: 9,
        nome: 'AirPods Pro',
        categoria: 'acessorios',
        descricao: 'Fones com cancelamento de ruído',
        preco: 'R$ 1.899',
        emoji: '🎧'
    },
    {
        id: 10,
        nome: 'Carregador Rápido 65W',
        categoria: 'acessorios',
        descricao: 'Compatível com múltiplos dispositivos',
        preco: 'R$ 299',
        emoji: '🔌'
    },
    {
        id: 11,
        nome: 'Cabo USB-C Premium',
        categoria: 'acessorios',
        descricao: 'Suporta até 100W de potência',
        preco: 'R$ 89',
        emoji: '🔗'
    },
    {
        id: 12,
        nome: 'Case Protetor Premium',
        categoria: 'acessorios',
        descricao: 'Proteção contra quedas e impactos',
        preco: 'R$ 149',
        emoji: '📦'
    }
];

// ============================================
// RENDERIZAÇÃO DE PRODUTOS
// ============================================

function renderProdutos(filtro = 'todos') {
    const grid = document.getElementById('produtosGrid');
    grid.innerHTML = '';

    const produtosFiltrados = filtro === 'todos' 
        ? produtos 
        : produtos.filter(p => p.categoria === filtro);

    produtosFiltrados.forEach(produto => {
        const card = document.createElement('div');
        card.className = 'produto-card';
        card.innerHTML = `
            <div class="produto-imagem">${produto.emoji}</div>
            <div class="produto-info">
                <div class="produto-categoria">${produto.categoria}</div>
                <h3 class="produto-nome">${produto.nome}</h3>
                <p class="produto-descricao">${produto.descricao}</p>
                <div class="produto-preco">${produto.preco}</div>
                <button class="produto-btn" onclick="abrirModalOrcamento('${produto.nome}')">Solicitar Orçamento</button>
            </div>
        `;
        grid.appendChild(card);
    });
}

// ============================================
// FILTRO DE CATEGORIAS
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    renderProdutos();

    const tabBtns = document.querySelectorAll('.tab-btn');
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            tabBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            const categoria = this.getAttribute('data-category');
            renderProdutos(categoria);
        });
    });

    // Cookie Consent
    setupCookieConsent();

    // Formulário de Contato
    setupContatoForm();

    // Formulário de Orçamento
    setupOrcamentoForm();

    // Fechar modal ao clicar fora
    window.addEventListener('click', function(event) {
        const modal = document.getElementById('modalOrcamento');
        if (event.target === modal) {
            fecharModalOrcamento();
        }
    });
});

// ============================================
// MODAL DE ORÇAMENTO
// ============================================

function abrirModalOrcamento(nomeProduto) {
    const modal = document.getElementById('modalOrcamento');
    const produtoSelecionado = document.getElementById('produtoSelecionado');
    produtoSelecionado.textContent = `Produto: ${nomeProduto}`;
    modal.classList.add('show');
}

function fecharModalOrcamento() {
    const modal = document.getElementById('modalOrcamento');
    modal.classList.remove('show');
}

function setupOrcamentoForm() {
    const form = document.getElementById('orcamentoForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Coletar dados do formulário
            const inputs = form.querySelectorAll('input, textarea');
            const dados = {
                nome: inputs[0].value,
                email: inputs[1].value,
                telefone: inputs[2].value,
                mensagem: inputs[3].value,
                produto: document.getElementById('produtoSelecionado').textContent
            };

            // Aqui você pode enviar os dados para um servidor
            // Por enquanto, apenas mostramos uma mensagem de sucesso
            alert(`Obrigado, ${dados.nome}! Sua solicitação de orçamento foi recebida.\n\nEntraremos em contato em breve pelo email ou telefone fornecido.`);
            
            form.reset();
            fecharModalOrcamento();
        });
    }
}

// ============================================
// COOKIE CONSENT
// ============================================

function setupCookieConsent() {
    const cookieConsent = document.getElementById('cookieConsent');
    const acceptBtn = document.getElementById('acceptCookies');
    const rejectBtn = document.getElementById('rejectCookies');

    // Verificar se já foi aceito
    if (!localStorage.getItem('cookieConsent')) {
        cookieConsent.classList.add('show');
    }

    acceptBtn.addEventListener('click', function() {
        localStorage.setItem('cookieConsent', 'accepted');
        cookieConsent.classList.remove('show');
        // Aqui você poderia carregar Google Analytics, etc.
    });

    rejectBtn.addEventListener('click', function() {
        localStorage.setItem('cookieConsent', 'rejected');
        cookieConsent.classList.remove('show');
    });
}

// ============================================
// FORMULÁRIO DE CONTATO
// ============================================

function setupContatoForm() {
    const form = document.getElementById('contatoForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Coletar dados do formulário
            const inputs = form.querySelectorAll('input, textarea');
            const dados = {
                nome: inputs[0].value,
                email: inputs[1].value,
                telefone: inputs[2].value,
                mensagem: inputs[3].value
            };

            // Aqui você pode enviar os dados para um servidor
            alert(`Obrigado, ${dados.nome}! Sua mensagem foi recebida.\n\nEntraremos em contato em breve.`);
            form.reset();
        });
    }
}

// ============================================
// SCROLL SUAVE
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
