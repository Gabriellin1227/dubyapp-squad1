<script setup>
const positions = [
    {
        id: 1,
        name: 'Analista Estagiário',
        activePermissions: 7,
        users: 3,
        active: 'Sim',
    },
    {
        id: 2,
        name: 'Analista Júnior',
        activePermissions: 0,
        users: 3,
        active: 'Não',
    },
    {
        id: 3,
        name: 'Analista Pleno',
        activePermissions: 7,
        users: 3,
        active: 'Sim',
    },
    {
        id: 4,
        name: 'Analista Sênior',
        activePermissions: 7,
        users: 3,
        active: 'Sim',
    },
];

const selectedRows = ref([]);

const isAllSelected = computed(() => {
    positions.every(row => selectedRows.value.includes(row.id));
});

const setAllSelected = (value) => {
    selectedRows.value = value
    ? positions.map(row => row.id)
    : [];
};

const toggleRow = (id) => {
    const index = selectedRows.value.indexOf(id);
    if (index > -1) {
        selectedRows.value.splice(index, 1);
    } else {
        selectedRows.value.push(id);
    }
};
</script>

<template>
    <table>
        <thead>
            <tr>
                <th>
                    <label class="custom-checkbox">
                        <input
                        type="checkbox"
                        :checked="isAllSelected"
                        @change="(e) => setAllSelected(e.target.checked)"
                        />
                        <span class="checkbox-box"></span>
                    </label>
                </th>
                <th>Nome</th>
                <th>Permissões Ativas</th>
                <th>Usuários</th>
                <th>Ativo</th>
                <th class="row-gap"></th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="position in positions" :key="position.id">
                <td>
                    <label class="custom-checkbox">
                        <input
                        type="checkbox"
                        :checked="selectedRows.includes(position.id)"
                        @change="() => toggleRow(position.id)"
                        />
                        <span class="checkbox-box"></span>
                    </label>
                </td>
                <td>{{ position.name }}</td>
                <td>{{ position.activePermissions }}</td>
                <td>{{ position.users }}</td>
                <td>{{ position.active }}</td>
                <td>
                    <NuxtLink :to="`/cargos/${position.id}`">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <g fill="none" stroke="#c0b8d4" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="#c0b8d4">
                                <path d="M21.544 11.045c.304.426.456.64.456.955c0 .316-.152.529-.456.955C20.178 14.871 16.689 19 12 19c-4.69 0-8.178-4.13-9.544-6.045C2.152 12.529 2 12.315 2 12c0-.316.152-.529.456-.955C3.822 9.129 7.311 5 12 5c4.69 0 8.178 4.13 9.544 6.045" />
                                <path d="M15 12a3 3 0 1 0-6 0a3 3 0 0 0 6 0" />
                            </g>
                        </svg>
                    </NuxtLink>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<style scoped>
table {
    display: block;

    width: 100%;

    height: 100%;

    color: var(--background);
    font-size: var(--font-md);

    overflow-y: auto;
    scrollbar-width: none;

    thead {
        display: flex;
        flex-direction: column;

        margin-bottom: 48px;
    }

    tbody {
        display: flex;
        flex-direction: column;
        gap: var(--spacing-xl);

        img {
            height: 32px;
            width: 32px;

            border-radius: 90px;
        }

        tr:hover {
            background-color: rgb(246, 246, 246, 0.2);

            border-radius: 5px;

            cursor: pointer;
        }
    }

    tr {
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        width: 100%;

        padding: var(--spacing-sm);

        th, td {
            display: flex;
            align-items: center;
        }

        th {
            color: rgb(246, 246, 246, 0.7);
            font-weight: 600;
        }

        td {
            font-weight: 400;

            a {

                border-radius: 5px;

                outline: 2px solid transparent;
                transition: outline 0.3s ease-in-out;
            }

            a:focus {
                outline: 2px solid var(--comp-4);
            }
        }

        .row-gap:last-child {
            flex-basis: 24px;
        }

        th:nth-of-type(2), td:nth-of-type(2) {
            flex-basis: 176px;
        }

        th:nth-of-type(3), td:nth-of-type(3) {
            flex-basis: 160px;
        }
        
        th:nth-of-type(4), td:nth-of-type(4) {
            flex-basis: 136px;
        }
        
        th:nth-of-type(5), td:nth-of-type(5) {
            flex-basis: 56px;
        }
    }
}



.custom-checkbox {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
}

.custom-checkbox input[type="checkbox"] {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
  pointer-events: none;
}

.checkbox-box {
  width: 24px;
  height: 24px;
  border: 1px solid var(--background);
  border-radius: 5px;
  transition: all 0.2s ease-in-out;
  position: relative;
  display: inline-block;
  flex-shrink: 0;
}

.custom-checkbox input[type="checkbox"]:checked + .checkbox-box {
  background-color: var(--background);
}

.custom-checkbox input[type="checkbox"]:checked + .checkbox-box::after {
  content: '';
  position: absolute;
  left: 8px;
  top: 4px;
  width: 6px;
  height: 12px;
  border: solid var(--principal);
  border-width: 0 3px 3px 0;
  transform: rotate(45deg);
  opacity: 1;
  transition: opacity 0.2s ease-in-out;
}

.custom-checkbox input[type="checkbox"]:not(:checked) + .checkbox-box::after {
  content: '';
  opacity: 0;
}

.checkbox-label {
  margin-left: 8px;
  color: var(--texto);
}
</style>