document.addEventListener('DOMContentLoaded', () => {
    initCheckboxes();
    initPrioritySelectors();
});

/**
 * Adiciona interatividade reativa aos componentes de caixa de seleção
 */
function initCheckboxes() {
    const checkboxes = document.querySelectorAll('.checkbox-round');
    checkboxes.forEach(box => {
        box.addEventListener('click', (e) => {
            e.stopPropagation(); // Impede disparo de eventos nos contêineres pais
            box.classList.toggle('checked');
            
            // Gerencia classes de contêineres de tarefas se aplicável
            const parentCard = box.closest('.task-card, .sub-item');
            if (parentCard) {
                parentCard.classList.toggle('completed');
                parentCard.classList.toggle('done');
            }
        });
    });
}

/**
 * Controla os estados de ativação exclusivos nos seletores de prioridade
 */
function initPrioritySelectors() {
    const options = document.querySelectorAll('.priority-option');
    options.forEach(option => {
        option.addEventListener('click', () => {
            options.forEach(opt => opt.classList.remove('selected'));
            option.classList.add('selected');
            
            const radio = option.querySelector('input[type="radio"]');
            if (radio) radio.checked = true;
        });
    });
}