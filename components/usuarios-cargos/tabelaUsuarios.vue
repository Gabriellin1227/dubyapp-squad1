<script setup>
const analystis = [
    {
        id: 1,
        name: 'Jonathan Curvelo Campos Azevedo',
        email: 'jonathancurvelo@gmail.com',
        lastAcess: '13:12'
    },
    {
        id: 2,
        name: 'Jonathan Curvelo Campos Azevedo',
        email: 'jonathancurvelo@gmail.com',
        lastAcess: 'Ontem'
    },
    {
        id: 3,
        name: 'Jonathan Curvelo Campos Azevedo',
        email: 'jonathancurvelo@gmail.com',
        lastAcess: 'Há 2 dias'
    },
    {
        id: 4,
        name: 'Jonathan Curvelo Campos Azevedo',
        email: 'jonathancurvelo@gmail.com',
        lastAcess: 'Há 6 dias'
    },
    {
        id: 5,
        name: 'Jonathan Curvelo Campos Azevedo',
        email: 'jonathancurvelo@gmail.com',
        lastAcess: '12/03/2024'
    },
    {
        id: 6,
        name: 'Jonathan Curvelo Campos Azevedo',
        email: 'jonathancurvelo@gmail.com',
        lastAcess: '13:12'
    },
    {
        id: 7,
        name: 'Jonathan Curvelo Campos Azevedo',
        email: 'jonathancurvelo@gmail.com',
        lastAcess: 'Ontem'
    },
    {
        id: 8,
        name: 'Jonathan Curvelo Campos Azevedo',
        email: 'jonathancurvelo@gmail.com',
        lastAcess: 'Há 2 dias'
    },
    {
        id: 9,
        name: 'Jonathan Curvelo Campos Azevedo',
        email: 'jonathancurvelo@gmail.com',
        lastAcess: 'Há 6 dias'
    },
    {
        id: 10,
        name: 'Jonathan Curvelo Campos Azevedo',
        email: 'jonathancurvelo@gmail.com',
        lastAcess: '12/03/2024'
    },
    {
        id: 11,
        name: 'Jonathan Curvelo Campos Azevedo',
        email: 'jonathancurvelo@gmail.com',
        lastAcess: '13:12'
    },
    {
        id: 12,
        name: 'Jonathan Curvelo Campos Azevedo',
        email: 'jonathancurvelo@gmail.com',
        lastAcess: 'Ontem'
    },
    {
        id: 13,
        name: 'Jonathan Curvelo Campos Azevedo',
        email: 'jonathancurvelo@gmail.com',
        lastAcess: 'Há 2 dias'
    },
    {
        id: 14,
        name: 'Jonathan Curvelo Campos Azevedo',
        email: 'jonathancurvelo@gmail.com',
        lastAcess: 'Há 6 dias'
    },
    {
        id: 15,
        name: 'Jonathan Curvelo Campos Azevedo',
        email: 'jonathancurvelo@gmail.com',
        lastAcess: '12/03/2024'
    }
];

const selectedRows = ref([]);

const isAllSelected = computed(() => {
    analystis.every(row => selectedRows.value.includes(row.id));
});

const setAllSelected = (value) => {
    selectedRows.value = value
    ? analystis.map(row => row.id)
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
                <th class="row-gap"></th>
                <th>Nome</th>
                <th>E-mail</th>
                <th>Último acesso</th>
                <th class="row-gap"></th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="analyst in analystis" :key="analyst.id">
                <td>
                    <label class="custom-checkbox">
                        <input
                        type="checkbox"
                        :checked="selectedRows.includes(analyst.id)"
                        @change="() => toggleRow(analyst.id)"
                        />
                        <span class="checkbox-box"></span>
                    </label>
                </td>
                <td>
                    <img src="/public/assets/images/photo-pexels.jpg" alt="Logo da Pagseguro">
                </td>
                <td>{{ analyst.name }}</td>
                <td>{{ analyst.email }}</td>
                <td>{{ analyst.lastAcess }}</td>
                <td>
                    <NuxtLink :to="`/analistas/${analyst.id}`">
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

        .row-gap {
            flex-basis: 32px;
        }

        .row-gap:last-child {
            flex-basis: 24px;
        }

        th:nth-of-type(3), td:nth-of-type(3) {
            flex-basis: 320px;
        }

        th:nth-of-type(4), td:nth-of-type(4) {
            flex-basis: 312px;
        }
        
        th:nth-of-type(5), td:nth-of-type(5) {
            flex-basis: 128px;
        }
        
        th:nth-of-type(6), td:nth-of-type(6) {
            flex-basis: 24px;
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