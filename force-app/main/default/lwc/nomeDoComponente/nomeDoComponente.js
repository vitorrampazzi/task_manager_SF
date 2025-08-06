import { LightningElement } from 'lwc';

export default class TaskManager extends LightningElement {
    novaTarefa = '';
    tarefas = [];

    handleInput(event) {
        this.novaTarefa = event.target.value;
    }

    addTarefa() {
        if (this.novaTarefa && this.novaTarefa.trim() !== '') {
            this.tarefas = [
                ...this.tarefas,
                {
                    id: Date.now(),
                    nome: this.novaTarefa,
                    concluida: false
                }
            ];
            this.novaTarefa = '';
        }
    }

    concluirTarefa(event) {
        const tarefaId = Number(event.target.dataset.id);
        this.tarefas = this.tarefas.map(tarefa =>
            tarefa.id === tarefaId ? { ...tarefa, concluida: !tarefa.concluida } : tarefa
        );
    }

    tarefaStyle(concluida) {
        return concluida ? 'text-decoration: line-through; color: #999;' : '';
    }

    getTarefaClass(concluida) {
    return concluida ? 'concluida' : '';
}
}