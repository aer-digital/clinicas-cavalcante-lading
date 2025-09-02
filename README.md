# U3DA

## Firebase deploy
firebase deploy --only hosting:centromedicocavalcante

## Github pages
__Copia os arquuvos da dist para a branch gh-pages__
*Tirar dist de git.ignore

git subtree push --prefix dist origin gh-pages

__Se comecar a dar muito erro por conta do historico do git, cria outra branh e referencia ela la:__

git subtree push --prefix dist origin gh-pages2


## Componentes interessantes
### Campanhas
Crie camapnhas q sao atualizadas automaticamente todo mes, é so atualziar o json com os dados q irao aparecer.
Ex: id=modalCampanha