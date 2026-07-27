# Vertigenics - Product Images Setup

## Como Adicionar as Imagens do Produto

### 1. Imagem Principal do Produto
**Arquivo necessário:** `product.png`

Esta imagem é usada em:
- Hero Section (topo da página)
- Seção "The Answer You've Been Looking For"

**Recomendações:**
- Formato: PNG com fundo transparente
- Resolução: 800x600px mínimo
- Tamanho: Menos de 500KB
- Conteúdo: Garrafa do Vertigenics com:
  - Badge "BEST VALUE" (canto superior esquerdo)
  - Certificações visíveis (FDA, LAB, USA, etc)
  - Pessoas felizes ao fundo (opcional)

**Como adicionar:**
1. Renomeie sua imagem para `product.png`
2. Coloque na pasta raiz do projeto (mesma pasta que index.html)
3. Faça commit e push

### 2. Outras Imagens (SVG Placeholders)
As seguintes seções usam SVG placeholders automáticos:
- Seção de Resultados (clientes felizes)
- Seção de Ingredientes (ingredientes naturais)
- Seção de Certificações (FDA, LAB, USA, cGMP)

Essas imagens são geradas automaticamente em SVG e não precisam ser adicionadas manualmente.

---

## Estrutura de Arquivos

```
vertigenics/
├── index.html          (Página principal)
├── style.css           (Estilos)
├── script.js           (Funcionalidade)
├── product.png         ← ADICIONE AQUI (imagem do produto)
├── Dockerfile
├── nginx.conf
├── docker-compose.yml
└── IMAGES.md           (Este arquivo)
```

---

## Alternativa: Usar Imagem em Base64

Se preferir, você pode converter a imagem para Base64 e embutir direto no HTML:

1. Acesse: https://www.base64-image.de/
2. Faça upload de `product.png`
3. Copie o código Base64
4. Atualize o `index.html` para:
```html
<img src="data:image/png;base64,iVBORw0KGgoAAAANS..." alt="Vertigenics">
```

---

## Deploy no EasyPanel

Após adicionar a imagem `product.png`:

1. Adicione ao git:
```bash
git add product.png
git commit -m "Add product image"
git push origin main
```

2. Deploy no EasyPanel normalmente - a imagem será incluída automaticamente

---

## Troubleshooting

**Imagem não aparece após deploy?**
- Verifique se o arquivo `product.png` está no repositório
- Verifique o console do navegador (F12) para erros
- Limpe o cache do navegador (Ctrl+Shift+Delete)

**Imagem cortada ou distorcida?**
- Use uma imagem PNG com fundo transparente
- Resolução recomendada: 800x600px ou similar
- Use ferramentas como Photoshop, GIMP ou online tools para ajustar

---

## Suporte

Para questões sobre as imagens, consulte:
- Documentação: README.md
- Issues: https://github.com/willsantos95/vertigenics/issues
