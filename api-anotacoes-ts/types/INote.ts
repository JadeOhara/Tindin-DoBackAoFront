//TYPESCRIPT
//é  preciso  tipar as variáveis
//const contatos: any[] = []

//const contatos: INote[] = []
//const notes: Array<INote> = []

//interface  obriga o dev a enviar os dados declarados

interface INote {
    id?: string, //variavel? significa que pode ser opcional
    title: string,
    description: number
  }

 export {
    INote
  }