Ao criar um pojeto Next-app devemos deixar mais limpo possivel, e como estamos utilizando Typescript devemos instalar ```yarn add typescript @types/react @types/node -D``` para criar uma configuração Typescript.

agora vamos utilizar o Chackra devemos instalar ```yarn add @chakra-ui/react @chakra-ui/core``` core é o coração do chakra, nos traz muitas funcionalidades e trabalha junto com emotion então vamos lá ```yarn add @emotion/react @emotion/styled framer-motion``` para começar a configurar nosso projeto.

fonte utilizada Roboto(400,500, 700), buscar no site as fontes que vao ser utilizadas e colocar no _document(html) no HEAD que criamos

aula PÁGINA SIGN IN estamos estilizando em chakra, e colocamos um padding="8", não é uma medida em PX OU REM, e sim um dimensionamento prórpio do chakra, em pixel basta multiplicar esse numero por 4 EX: p='8'(chakra) é igual a 32px em REM dividir por 4

Aula Component INPUT, HEADER, SIDEBAR e Página Dashboard: Somente acompanhando a aula, SEM COLOCAR AS MÃOS NA MASSA! ASSISTINDO O VIDEO em 19/06/21, instalações de LIBS realizar no momento que estou assistindo o video

Pra melhorar e agilizar mais nossa aplicação, Diego nos informa que devemos separar alguns elementos em componentes(facilitando assim sua manutenção), AÇÃO: criar um componente INPUT, depois adicionar no index esse componente, logo após criar HEADER(em 2 vídeos)