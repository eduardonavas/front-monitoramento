export interface IServidor{
    id: number,
    nome: String,
    hostName: string,
    ip: string,
    porta: number,
    timeOut: number,
    tempoMedioResposta: number,
    usuario: string,
    senha: string,
    status: string,
    tempoRefresh: number
}