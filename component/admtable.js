import '../css/main.scss';

const admtable = () => {
    const container = document.createElement('div');
    container.className = 'container';

    container.innerHTML = `
        <div class="tables-container">
            <h2>Список таблиц в базе данных</h2>
            <div id="tablesList"></div>
        </div>
    `;

    const loadTables = async () => {
        try {
            const response = await fetch('http://localhost/AestheticaVite/getTables.php');
            const tables = await response.json();

            const tablesList = container.querySelector('#tablesList');
            tablesList.innerHTML = '';

            tables.forEach(async table => {
                const tableContainer = document.createElement('div');
                tableContainer.className = 'table-container';
                tableContainer.innerHTML = `<h3>${table}</h3><ul id="fields-${table}"></ul><div class="records-table-container" id="records-${table}"></div>`;
                tablesList.appendChild(tableContainer);

                const fields = await loadFields(table);
                const fieldsList = tableContainer.querySelector(`#fields-${table}`);
                fields.forEach(field => {
                    fieldsList.innerHTML += `<li>${field}</li>`;
                });

                const records = await loadRecords(table);
                const recordsContainer = tableContainer.querySelector(`#records-${table}`);
                if (records.length > 0) {
                    const tableElement = document.createElement('table');
                    tableElement.className = 'records-table';

                    const headerRow = document.createElement('tr');
                    fields.forEach(field => {
                        const headerCell = document.createElement('th');
                        headerCell.textContent = field;
                        headerRow.appendChild(headerCell);
                    });
                    tableElement.appendChild(headerRow);

                    records.forEach(record => {
                        const row = document.createElement('tr');
                        fields.forEach(field => {
                            const cell = document.createElement('td');
                            cell.textContent = record[field] || '';
                            cell.className = 'editable';
                            cell.setAttribute('contenteditable', 'true');
                            cell.addEventListener('blur', async () => {
                                const newValue = cell.textContent;
                                await updateRecord(table, record, field, newValue);
                            });
                            row.appendChild(cell);
                        });
                        tableElement.appendChild(row);
                    });

                    recordsContainer.appendChild(tableElement);
                } else {
                    recordsContainer.textContent = 'Нет записей';
                }
            });
        } catch (error) {
            console.error('Ошибка при загрузке таблиц:', error);
        }
    };

    const loadFields = async (table) => {
        try {
            const response = await fetch(`http://localhost/AestheticaVite/getFields.php?table=${table}`);
            return await response.json();
        } catch (error) {
            console.error(`Ошибка при загрузке полей для таблицы ${table}:`, error);
            return [];
        }
    };

    const loadRecords = async (table) => {
        try {
            const response = await fetch(`http://localhost/AestheticaVite/getRecords.php?table=${table}`);
            return await response.json();
        } catch (error) {
            console.error(`Ошибка при загрузке записей для таблицы ${table}:`, error);
            return [];
        }
    };

    const updateRecord = async (table, record, field, newValue) => {
        const primaryKeyField = Object.keys(record)[0];
        const primaryKeyValue = record[primaryKeyField];

        const data = {
            table: table,
            primaryKeyField: primaryKeyField,
            primaryKeyValue: primaryKeyValue,
            field: field,
            newValue: newValue
        };

        try {
            const response = await fetch('http://localhost/AestheticaVite/updateRecord.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            const responseData = await response.json();
            if (responseData.success) {
                console.log('Запись успешно обновлена');
            } else {
                console.error('Ошибка при обновлении записи:', responseData.message);
            }
        } catch (error) {
            console.error('Ошибка при обновлении записи:', error);
        }
    };

    loadTables();

    return container;
}

export default admtable;
