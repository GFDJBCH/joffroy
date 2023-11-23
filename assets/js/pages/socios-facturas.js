let id_socio = null;
let partner_data = [];
let currentBill = [];
let previewData = [];
let isConceptEditing = false;
let isConceptPreviewEditing = false;
let isBillEditing = false;
let isForeign = false;

let numberFormat = wNumb({decimals: 2, thousand: ","});
let percentFormat = wNumb({decimals: 2, thousand: ",", prefix: '% '});
let moneyFormatTable = wNumb({decimals: 2, thousand: ",", prefix: '$ ',});

getInfo();

let tp_proveedor_ = "mexicano";
const conceptos_ = [];
let subt = 0;

const mdlInvoiceForeign = new bootstrap.Modal(document.getElementById('mdlInvoiceForeign'), {
    keyboard: false
});
let mdlInvoiceForeignElement = document.getElementById('mdlInvoiceForeign')
mdlInvoiceForeignElement.addEventListener('hidden.bs.modal', function (event) {
    billClearData();
});

const dvCapCfdi_pdf = document.getElementById("dvCapCfdi_pdf");
const dvCapCfdi_xml = document.getElementById("dvCapCfdi_xml");
const dvCapOther = document.getElementById("dvCapOther");

const dvSpInvoice = document.getElementById("dvSpInvoice");
const dvSpConcept = document.getElementById("dvSpConcept");
const dvSpCapConcepts = document.getElementById("dvSpCapConcepts");

const billForm = document.getElementById("bill-form");

const billPdf = billForm.querySelector("#bill-pdf");
const billXml = billForm.querySelector("#bill-xml");
const billOther = billForm.querySelector("#bill-other")

const billInvoice = billForm.querySelector("#bill-invoice");
const billDate = billForm.querySelector("#bill-date");
const billExpire = billForm.querySelector("#bill-expire");
const billAmount = billForm.querySelector("#bill-amount");
const billCurrency = billForm.querySelector("#bill-currency");
const billPayment = billForm.querySelector("#bill-payment");
const billExpense = billForm.querySelector("#bill-expense");
const billCompany = billForm.querySelector("#bill-company");
const billBranch = billForm.querySelector("#bill-branch");
const billNotes = document.getElementById("bill-notes");
const billSubmit = document.getElementById("bill-submit");

const billSubtotal = document.getElementById("bill-subtotal");
const billWithholding = document.getElementById("bill-withholding");
const billTaxes = document.getElementById("bill-taxes");
const billTotal = document.getElementById("bill-total");
const billTotalMsg = document.getElementById("bill-total-msg");

const conceptFormDiv = document.getElementById("concept-form-div");
const conceptForm = document.getElementById("concept-form");
const conceptDescription = conceptForm.querySelector("#concept-description");
const conceptPrice = conceptForm.querySelector("#concept-price");
const conceptQuantity = conceptForm.querySelector("#concept-quantity");
const conceptSubmit = document.getElementById('concept-submit');
const conceptSubmitTitle = conceptSubmit.querySelector('span.button_add_concept');
const conceptSubmitIcon = conceptSubmit.querySelector('span.submit-icon');
const conceptUpdateCancel = document.getElementById('concept-update-cancel');

const billDatePicker = flatpickr(billDate, {
    weekNumbers: true,
    onChange: function (selectedDates, dateStr) {
        if (selectedDates && selectedDates[0]) {
            const minDate = selectedDates[0];
            billExpirePicker.set("minDate", minDate);
        }
    }
});
const billExpirePicker = flatpickr(billExpire, {
    weekNumbers: true
});
const currencies = [
    {id: "USD", text: language === "en" ? "United States Dollar (USD)" : "Dólar estadounidense (USD)"},
    {id: "MXN", text: language === "en" ? "Mexican Peso (MXN)" : "Peso mexicano (MXN)"},
];
$(billCurrency).select2({
    placeholder: language === "en" ? "Currency" : "Moneda",
    dropdownParent: $('#mdlInvoiceForeign'),
    data: currencies
});
const paymentTerms = [
    {id: "PUE", text: language === "en" ? "Single payment (PUE)" : "Pago en una sola exhibición (PUE)"},
    {id: "PPD", text: language === "en" ? "Deferred payment (PPD)" : "Pago Diferido (PPD)"},
];
$(billPayment).select2({
    placeholder: language === "en" ? "Payment terms" : "Condiciones de pago",
    dropdownParent: $('#mdlInvoiceForeign'),
    data: paymentTerms
});
const expenseConcepts = [
    {id: "rent", text: "Alquiler"},
    {id: "transportation", text: "Transporte"},
    {id: "food", text: "Comida"},
    {id: "entertainment", text: "Entretenimiento"},
    {id: "officeSupplies", text: "Material de oficina"},
    {id: "utilities", text: "Servicios públicos"},
    {id: "travel", text: "Viaje"},
    {id: "medical", text: "Gastos médicos"},
    {id: "education", text: "Educación"},
    {id: "other", text: "Otro"}
];
$(billExpense).select2({
    placeholder: language === "en" ? "Expense concept" : "Concepto de gasto",
    dropdownParent: $('#mdlInvoiceForeign'),
    data: expenseConcepts,
    allowClear: true
})

fetch('controller/obtener-empresas.php')
    .then(response => {
        if (!response.ok) {
            throw new Error('Error en la solicitud');
        }
        return response.json();
    })
    .then(data => {
        const newDataUnits = data.map(objeto => {
            return {...objeto, text: objeto.Descripcion, id: objeto.Id};
        });
        $(billCompany).select2({
            placeholder: language === "en" ? "Company" : "Compañía",
            dropdownParent: $('#mdlInvoiceForeign'),
            data: newDataUnits,
            allowClear: true
        });
        $(previewCompany).select2({
            placeholder: language === "en" ? "Company" : "Compañía",
            dropdownParent: $('#mdl-preview'),
            data: newDataUnits,
            allowClear: true
        });
    })
    .catch(error => {
        console.error('Error:', error);
    });


fetch('controller/getBranch.php')
    .then(response => {
        if (!response.ok) {
            throw new Error('Error en la solicitud');
        }
        return response.json();
    })
    .then(data => {
        $(billBranch).select2({
            placeholder: language === "en" ? "Branch" : "Sucursal",
            dropdownParent: $('#mdlInvoiceForeign'),
            data,
            allowClear: true
        });
        $(previewBranch).select2({
            placeholder: language === "en" ? "Branch" : "Sucursal",
            dropdownParent: $('#mdl-preview'),
            data,
            allowClear: true
        });
    })
    .catch(error => {
        console.error('Error:', error);
    });

const conceptsTable = $("#concepts-table").DataTable({
    info: false,
    searching: false,
    paging: false,
    columns: [
        {
            data: "concept",
            title: (language === 'en' ? "Concept" : "Concepto"),
            visible: true,
            searchable: true,
            className: 'w-250px ps-3'
        },
        {
            data: "price",
            title: (language === 'en' ? "Unit price" : "Precio unitario"),
            visible: true,
            searchable: true,
            className: 'w-100px text-end',
            render: function (data, type, row) {
                return `<p class="m-0">${moneyFormatTable.to(data)}</p>`;
            }
        },
        {
            data: "quantity",
            title: (language === 'en' ? "Quantity" : "Cantidad"),
            visible: true,
            searchable: true,
            className: 'w-60px text-center',
            render: function (data, type, row) {
                return `<p class="m-0">${numberFormat.to((data))}</p>`;
            }
        },
        {
            title: (language === 'en' ? "Subtotal" : "Subtotal"),
            data: null,
            orderable: false,
            searchable: false,
            className: 'w-100px text-end',
            render: function (data, type, row) {
                return `<p class="m-0">${moneyFormatTable.to((row.price * row.quantity))}</p>`;
            }

        },
        {
            data: null,
            orderable: false,
            searchable: false,
            className: 'w-100px text-center',
            render: function (data, type, row) {
                let btnEliminar = `<button type="button" class="eliminar btn btn-sm btn-light btn-active-light-danger btn-icon"><i class="fa-duotone fa-trash-can"></i></button>`
                let btnActualizar = `<button type="button" class="actualizar btn btn-sm btn-light btn-active-light-warning btn-icon"><i class="fa-duotone fa-pen-to-square"></i></button>`
                let botones = '';
                if (isForeign) {
                    botones = btnEliminar + btnActualizar
                }

                return botones;
            }
        }
    ],
    language: {
        url: (language === 'en' ? "//cdn.datatables.net/plug-ins/1.13.6/i18n/en.json" : "//cdn.datatables.net/plug-ins/1.13.6/i18n/es-ES.json")
    },
});
$('#concepts-table tbody').on('click', '.eliminar', function () {
    let row = $(this).closest('tr');
    if (row.hasClass('child')) {
        row = row.prev();
    }
    let data = conceptsTable.row(row).data();
    let dataIndex = conceptsTable.row(row).index();
    Swal.fire({
        text: (language === 'en' ? "Do you want to delete the concept?" : "Desea eliminar el concepto?"),
        icon: "warning",
        showCancelButton: !0,
        buttonsStyling: !1,
        confirmButtonText: (language === 'en' ? "Yes, Delete!" : "Si, Eliminar!"),
        cancelButtonText: (language === 'en' ? "Cancel" : "Cancelar"),
        customClass: {confirmButton: "btn btn-danger", cancelButton: "btn btn-active-light"}
    }).then((function (t) {
        if (t.isConfirmed) {
            if (!data.id) {
                conceptsTable.row(dataIndex).remove().draw();
                calculateConcepts();
            }
        }
    }))
});
$('#concepts-table tbody').on('click', '.actualizar', function () {
    let row = $(this).closest('tr');
    if (row.hasClass('child')) {
        row = row.prev();
    }
    let data = conceptsTable.row(row).data();
    let dataIndex = conceptsTable.row(row).index();

    conceptSubmitTitle.setAttribute('data-index', dataIndex);
    isConceptEditing = true;

    conceptDescription.value = data.concept;
    conceptPrice.value = data.price;
    conceptQuantity.value = data.quantity;

    conceptSubmitTitle.innerText = language === "en" ? "Update" : "Actualizar";
    conceptSubmitIcon.innerHTML = '<i class="fa-duotone fa-pen-to-square" style="--fa-primary-color: #ffffff; --fa-secondary-color: #ffffff;"></i>';

    conceptUpdateCancel.style.display = 'inline';
    conceptValidator.validate();
    conceptDescription.focus();
});

const conceptValidator = FormValidation.formValidation(
    conceptForm,
    {
        fields: {
            'concept-description': {
                validators: {
                    notEmpty: {
                        message: (language === "en" ? "Required field" : "Campo requerido")
                    }
                }
            },
            'concept-price': {
                validators: {
                    notEmpty: {
                        message: (language === "en" ? "Required field" : "Campo requerido")
                    },
                    greaterThan: {
                        min: 1,
                        message: (language === "en" ? "Please enter a value greater than 0" : "Por favor, introduzca un valor mayor que 0")
                    }
                }
            },
            'concept-quantity': {
                validators: {
                    notEmpty: {
                        message: (language === "en" ? "Required field" : "Campo requerido")
                    },
                    greaterThan: {
                        min: 1,
                        message: (language === "en" ? "Please enter a value greater than 0" : "Por favor, introduzca un valor mayor que 0")
                    }
                }
            },
        },
        plugins: {
            trigger: new FormValidation.plugins.Trigger(),
            bootstrap: new FormValidation.plugins.Bootstrap5({
                rowSelector: '.fv-row',
                eleInvalidClass: '',
                eleValidClass: ''
            })
        }
    }
);

conceptSubmit.addEventListener('click', function (e) {
    e.preventDefault();
    if (conceptValidator) {
        conceptValidator.validate().then(function (status) {
            if (status === 'Valid') {
                conceptSubmit.setAttribute('data-kt-indicator', 'on');
                conceptSubmit.disabled = true;
                setTimeout(function () {
                    conceptSubmit.removeAttribute('data-kt-indicator');
                    conceptSubmit.disabled = false;

                    if (isConceptEditing) {
                        const index = conceptSubmitTitle.dataset.index;
                        const concept = {
                            concept: conceptDescription.value,
                            price: Number(conceptPrice.value),
                            quantity: Number(conceptQuantity.value)
                        }
                        conceptsTable.row(index).data(concept).draw();
                    } else {
                        const concept = {
                            concept: conceptDescription.value,
                            price: Number(conceptPrice.value),
                            quantity: Number(conceptQuantity.value)
                        }
                        conceptsTable.row.add(concept).draw();
                    }
                    calculateConcepts();
                    conceptClearData();

                }, 1500);
            }
        });
    }
});
conceptUpdateCancel.addEventListener('click', function (e) {
    e.preventDefault();
    conceptClearData();
});

const billValidator = FormValidation.formValidation(
    billForm,
    {
        fields: {
            'bill-invoice': {
                validators: {
                    notEmpty: {
                        message: (language === "en" ? "Required field" : "Campo requerido")
                    }
                }
            },
            'bill-date': {
                validators: {
                    notEmpty: {
                        message: (language === "en" ? "Required field" : "Campo requerido")
                    },
                    greaterThan: {
                        min: 1,
                        message: (language === "en" ? "Please enter a value greater than 0" : "Por favor, introduzca un valor mayor que 0")
                    }
                }
            },
            'bill-amount': {
                validators: {
                    notEmpty: {
                        message: (language === "en" ? "Required field" : "Campo requerido")
                    },
                    greaterThan: {
                        min: 1,
                        message: (language === "en" ? "Please enter a value greater than 0" : "Por favor, introduzca un valor mayor que 0")
                    }
                }
            },
            'bill-currency': {
                validators: {
                    notEmpty: {
                        message: (language === "en" ? "Required field" : "Campo requerido")
                    }
                }
            },
            'bill-payment': {
                validators: {
                    notEmpty: {
                        message: (language === "en" ? "Required field" : "Campo requerido")
                    }
                }
            },
        },
        plugins: {
            trigger: new FormValidation.plugins.Trigger(),
            bootstrap: new FormValidation.plugins.Bootstrap5({
                rowSelector: '.fv-row',
                eleInvalidClass: '',
                eleValidClass: ''
            })
        }
    }
);
billSubmit.addEventListener('click', function (e) {
    e.preventDefault();
    if (billValidator) {
        billValidator.validate().then(function (status) {
            if (status === 'Valid') {
                billSubmit.setAttribute('data-kt-indicator', 'on');
                billSubmit.disabled = true;
                setTimeout(function () {
                    billSubmit.removeAttribute('data-kt-indicator');
                    billSubmit.disabled = false;

                    const conceptsData = conceptsTable.rows().data().toArray();
                    const billData = new FormData();
                    billData.append("partner", id_socio);
                    billData.append("invoice", billInvoice.value);
                    billData.append("date", billDate.value);
                    billData.append("expire", billExpire.value);
                    billData.append("amount", billAmount.value);
                    billData.append("currency", $(billCurrency).val());
                    billData.append("payments", $(billPayment).val());
                    billData.append("expense", $(billExpense).val());
                    billData.append("company", $(billCompany).val());
                    billData.append("branch", $(billBranch).val());
                    billData.append("concepts", JSON.stringify(conceptsData));
                    billData.append("notes", billNotes.value);
                    billData.append("withholding", billWithholding.value);
                    billData.append("globaltax", billTaxes.value);
                    billData.append('billPdf', billPdf.files[0]);
                    billData.append('billXml', billXml.files[0]);
                    billData.append('billOther', billOther.files[0]);

                    fetch('controller/guardar-factura.php', {
                        method: "POST",
                        body: billData
                    })
                        .then(response => response.json())
                        .then(response => {
                            if (response.estado === 200) {
                                toastr.success(response.texto);
                                conceptsTable.clear().draw();
                                billsTable.ajax.reload();
                                mdlInvoiceForeign.hide();
                            } else {
                                Swal.fire({
                                    text: "Lo sentimos, parece que se han detectado algunos errores, inténtalo de nuevo.",
                                    icon: "error",
                                    buttonsStyling: !1,
                                    confirmButtonText: "Entiendo",
                                    customClass: {confirmButton: "btn btn-primary"}
                                })
                            }
                        });
                    billClearData();
                }, 1500);
            }
        });
    }
});

const mdlPreview = new bootstrap.Modal(document.getElementById('mdl-preview'), {
    keyboard: false
});

const pdfDocumentDiv = document.getElementById("pdf-document-div");
const pdfDocumentLink = document.getElementById("pdf-document-link");
const pdfDocumentSize = document.getElementById("pdf-document-size");
const xmlDocumentDiv = document.getElementById("xml-document-div");
const xmlDocumentLink = document.getElementById("xml-document-link");
const xmlDocumentSize = document.getElementById("xml-document-size");
const otherDocumentDiv = document.getElementById("other-document-div");
const otherDocumentLink = document.getElementById("other-document-link");
const otherDocumentSize = document.getElementById("other-document-size");
const previewStatusLbl = document.getElementById("preview-status-lbl");
const receiptDocumentDiv = document.getElementById("receipt-document-div");
const receiptDocumentLink = document.getElementById("receipt-document-link");
const receiptDocumentName = document.getElementById("receipt-document-name");
const receiptDocumentSize = document.getElementById("receipt-document-size");

const previewForm = document.getElementById("preview-form");

const previewInvoice = previewForm.querySelector("#preview-invoice");
const previewDate = previewForm.querySelector("#preview-date");
const previewExpire = previewForm.querySelector("#preview-expire");
const previewAmount = previewForm.querySelector("#preview-amount");
const previewCurrency = previewForm.querySelector("#preview-currency");
const previewPayment = previewForm.querySelector("#preview-payment");
const previewExpense = previewForm.querySelector("#preview-expense");
const previewCompany = previewForm.querySelector("#preview-company");
const previewBranch = previewForm.querySelector("#preview-branch");
const previewNotes = document.getElementById("preview-notes");
const previewSubmit = document.getElementById("preview-submit");

const previewSubtotal = document.getElementById("preview-subtotal");
const previewWithholding = document.getElementById("preview-withholding");
const previewTaxes = document.getElementById("preview-taxes");
const previewTotal = document.getElementById("preview-total");
const previewTotalMsg = document.getElementById("preview-total-msg");

const previewDatePicker = flatpickr(previewDate, {
    weekNumbers: true,
    onChange: function (selectedDates, dateStr) {
        if (selectedDates && selectedDates[0]) {
            const minDate = selectedDates[0];
            previewExpirePicker.set("minDate", minDate);
        }
    }
});
const previewExpirePicker = flatpickr(previewExpire, {
    weekNumbers: true
});
$(previewCurrency).select2({
    placeholder: language === "en" ? "Currency" : "Moneda",
    dropdownParent: $('#mdl-preview'),
    data: currencies
});
$(previewPayment).select2({
    placeholder: language === "en" ? "Payment terms" : "Condiciones de pago",
    dropdownParent: $('#mdl-preview'),
    data: paymentTerms
});
$(previewExpense).select2({
    placeholder: language === "en" ? "Expense concept" : "Concepto de gasto",
    dropdownParent: $('#mdl-preview'),
    data: expenseConcepts,
    allowClear: true
})

const previewConceptForm = document.getElementById("preview-concept-form");
const previewConceptDescription = previewConceptForm.querySelector("#preview-concept-description");
const previewConceptPrice = previewConceptForm.querySelector("#preview-concept-price");
const previewConceptQuantity = previewConceptForm.querySelector("#preview-concept-quantity");
const previewConceptSubmit = document.getElementById('preview-concept-submit');
const previewConceptSubmitTitle = previewConceptSubmit.querySelector('span.button_add_concept');
const previewConceptSubmitIcon = previewConceptSubmit.querySelector('span.submit-icon');
const previewConceptUpdateCancel = document.getElementById('preview-concept-update-cancel');

const previewConceptsTable = $("#preview-concepts-table").DataTable({
    info: false,
    searching: false,
    paging: false,
    columns: [
        {
            data: "concept",
            title: (language === 'en' ? "Concept" : "Concepto"),
            visible: true,
            searchable: true,
            className: 'w-200px ps-3'
        },
        {
            data: "price",
            title: (language === 'en' ? "Unit price" : "Precio unitario"),
            visible: true,
            searchable: true,
            className: 'w-100px',
            render: function (data, type, row) {
                return `<p class="m-0">${moneyFormatTable.to(data)}</p>`;
            }
        },
        {
            data: "quantity",
            title: (language === 'en' ? "Qty" : "Cant."),
            visible: true,
            searchable: true,
            className: 'w-60px',
            render: function (data, type, row) {
                return `<p class="m-0">${numberFormat.to((data))}</p>`;
            }
        },
        {
            title: (language === 'en' ? "Subtotal" : "Subtotal"),
            data: null,
            orderable: false,
            searchable: false,
            render: function (data, type, row) {
                return `<p class="m-0">${moneyFormatTable.to((row.price * row.quantity))}</p>`;
            }

        },
        {
            data: null,
            orderable: false,
            searchable: false,
            className: 'w-80px text-center'
        }
    ],
    columnDefs: [
        {
            targets: 4,
            render: function (data, type, row) {
                if (Number(partner_data.tp_proveedor) === 3) {
                    return `<button type="button" class="eliminar btn btn-sm btn-light btn-active-light-danger btn-icon">
                                <i class="fa-duotone fa-trash-can"></i>
                             </button>
                            <button type="button" class="actualizar btn btn-sm btn-light btn-active-light-warning btn-icon">
                                <i class="fa-duotone fa-pen-to-square"></i>
                            </button>`;
                } else {
                    return '';
                }
            },
            visible: Number(partner_data.tp_proveedor) === 3
        }
    ],
    language: {
        url: (language === 'en' ? "//cdn.datatables.net/plug-ins/1.13.6/i18n/en.json" : "//cdn.datatables.net/plug-ins/1.13.6/i18n/es-ES.json")
    },
});
$('#preview-concepts-table tbody').on('click', '.eliminar', function () {
    let row = $(this).closest('tr');
    if (row.hasClass('child')) {
        row = row.prev();
    }
    let data = previewConceptsTable.row(row).data();
    let dataIndex = previewConceptsTable.row(row).index();
    Swal.fire({
        text: (language === 'en' ? "Do you want to delete the concept?" : "Desea eliminar el concepto?"),
        icon: "warning",
        showCancelButton: !0,
        buttonsStyling: !1,
        confirmButtonText: (language === 'en' ? "Yes, Delete!" : "Si, Eliminar!"),
        cancelButtonText: (language === 'en' ? "Cancel" : "Cancelar"),
        customClass: {confirmButton: "btn btn-danger", cancelButton: "btn btn-active-light"}
    }).then((function (t) {
        if (t.isConfirmed) {
            if (!data.id) {
                previewConceptsTable.row(dataIndex).remove().draw();
                calculateConceptsPreview();
            }
        }
    }))
});
$('#preview-concepts-table tbody').on('click', '.actualizar', function () {
    let row = $(this).closest('tr');
    if (row.hasClass('child')) {
        row = row.prev();
    }
    let data = previewConceptsTable.row(row).data();
    let dataIndex = previewConceptsTable.row(row).index();

    previewConceptSubmitTitle.setAttribute('data-index', dataIndex);
    isConceptPreviewEditing = true;

    previewConceptDescription.value = data.concept;
    previewConceptPrice.value = data.price;
    previewConceptQuantity.value = data.quantity;

    previewConceptSubmitTitle.innerText = language === "en" ? "Update" : "Actualizar";
    previewConceptSubmitIcon.innerHTML = '<i class="fa-duotone fa-pen-to-square" style="--fa-primary-color: #ffffff; --fa-secondary-color: #ffffff;"></i>';

    previewConceptUpdateCancel.style.display = 'inline';
    previewConceptValidator.validate();
    previewConceptDescription.focus();
});

const billsTable = $("#bills-table").DataTable({
    info: false,
    searching: false,
    paging: false,
    columns: [
        {data: "id", visible: false, searchable: false},
        {data: "partner", visible: false, searchable: false},
        {
            data: "invoice",
            title: (language === 'en' ? "Invoice" : "Factura"),
            visible: true,
            searchable: true,
            className: 'w-200px ps-3'
        },
        {
            data: "date",
            title: (language === 'en' ? "Date" : "Fecha"),
            visible: true,
            searchable: true,
            className: 'w-100px'
        },
        {
            data: "expire",
            title: (language === 'en' ? "Expire" : "Expira"),
            visible: false,
            searchable: true,
            className: 'w-200px'
        },
        {
            data: "amount",
            title: (language === 'en' ? "Amount" : "Importe"),
            visible: true,
            searchable: true,
            className: 'w-100px',
            render: function (data, type, row) {
                return moneyFormatTable.to(Number(data));
            }
        },
        {
            data: "currency",
            title: (language === 'en' ? "Currency" : "Moneda"),
            visible: true,
            searchable: true,
            className: 'w-100px'
        },
        {
            data: "payments",
            title: (language === 'en' ? "Concept" : "Concepto"),
            visible: false,
            searchable: true,
            className: 'w-200px'
        },
        {
            data: "expense",
            title: (language === 'en' ? "Concept" : "Concepto"),
            visible: false,
            searchable: true,
            className: 'w-200px'
        },
        {
            data: "company",
            title: (language === 'en' ? "Company" : "Compañía"),
            visible: false,
            searchable: true,
            className: 'w-200px'
        },
        {
            data: "branch",
            title: (language === 'en' ? "Branch" : "Sucursal"),
            visible: false,
            searchable: true,
            className: 'w-200px'
        },
        {
            data: "concepts",
            visible: false,
            searchable: true,
            className: 'w-200px'
        },
        {
            data: "notes",
            visible: false,
            searchable: true,
        },
        {
            data: "withholding",
            title: (language === 'en' ? "Withholding" : "Retención"),
            visible: true,
            searchable: true,
            className: 'w-100px'
        },
        {
            data: "globaltax",
            title: (language === 'en' ? "Taxes" : "Impuestos"),
            visible: true,
            searchable: true,
            className: 'w-100px',
            render: function (data, type, row) {
                return data;
            }
        },
        {
            data: "purchase",
            title: (language === 'en' ? "Concept" : "Concepto"),
            visible: false,
            searchable: true,
            className: 'w-200px'
        },
        {
            data: "justification",
            title: (language === 'en' ? "Concept" : "Concepto"),
            visible: false,
            searchable: true,
            className: 'w-200px'
        },
        {
            data: null,
            title: (language === 'en' ? "Status" : "Estado"),
            visible: true,
            searchable: true,
            className: 'w-150px',
            render: function (data, type, row) {
                const aux = (language === 'en' ? row.statusi : row.statuse);
                return aux.toUpperCase();
            }
        },
        {
            data: "created_at",
            title: (language === 'en' ? "Created at" : "Fecha de registro"),
            visible: true,
            searchable: true,
            className: 'w-150px'
        },
        {
            data: "updated_at",
            title: (language === 'en' ? "Concept" : "Concepto"),
            visible: false,
            searchable: false,
        },
        {
            data: "deleted_at",
            title: (language === 'en' ? "Concept" : "Concepto"),
            visible: false,
            searchable: false,
        },
        {
            defaultContent: `<button type="button" class="actualizar btn btn-sm btn-light btn-active-light-warning btn-icon">
<i class="fa-duotone fa-pen-to-square"></i>
</button>`,
            orderable: false,
            searchable: false,
            className: 'w-80px text-center',
        }
    ],
    ajax: {
        url: 'controller/buscar-facturas.php',
        type: 'POST',
        data: function (d) {
            d.socio = id_socio;
        }
    },
    language: {
        url: (language === 'en' ? "//cdn.datatables.net/plug-ins/1.13.6/i18n/en.json" : "//cdn.datatables.net/plug-ins/1.13.6/i18n/es-ES.json")
    },
});
$('#bills-table tbody').on('click', '.actualizar', function () {
    let row = $(this).closest('tr');
    if (row.hasClass('child')) {
        row = row.prev();
    }
    let data = billsTable.row(row).data();
    let dataIndex = billsTable.row(row).index();
    let color = [];
    switch (data.statuse) {
        case "pendiente":
            color = ['bg-warning', 'text-dark'];
            break;
        case "aceptado":
            color = ['bg-joffroy-primary', 'text-white'];
            break;
        case "rechazado":
            color = ['bg-danger', 'text-white'];
            break;
    }

    previewStatusLbl.className = "";
    previewStatusLbl.className = "text-center py-4 rounded-3 text-uppercase";
    previewStatusLbl.classList.add(...color);
    previewStatusLbl.innerText = language === 'en' ? data.statusi : data.statuse

    if (data.archivo_pdf.length > 0) {
        const dataPDF = data.archivo_pdf[0];
        pdfDocumentSize.innerText = (dataPDF.size / 1048576).toFixed(2) + ' MB';
        pdfDocumentLink.href = dataPDF.path;
        pdfDocumentDiv.style.display = 'block';
    } else {
        pdfDocumentDiv.style.display = 'none';
    }
    if (data.archivo_xml.length > 0) {
        const dataPDF = data.archivo_xml[0];
        xmlDocumentSize.innerText = (dataPDF.size / 1048576).toFixed(2) + ' MB';
        xmlDocumentLink.href = dataPDF.path;
        xmlDocumentDiv.style.display = 'block';
    } else {
        xmlDocumentDiv.style.display = 'none';
    }
    if (data.archivo_other.length > 0) {
        otherDocumentName.innerText = dataPDF.name;
        otherDocumentSize.innerText = (dataPDF.size / 1048576).toFixed(2) + ' MB';
        otherDocumentLink.href = dataPDF.path;
        otherDocumentDiv.style.display = 'block';
    } else {
        otherDocumentDiv.style.display = 'none';
    }
    if (data.archivo_receipt.length > 0) {
        const dataPDF = data.archivo_receipt[0];
        let auxSize = (dataPDF.size / 1048576).toFixed(2) + ' MB';
        receiptDocumentDiv.innerHTML = `
        
<a href="${dataPDF.path}" target="_blank" class="btn btn-outline btn-outline-dashed btn-outline-default p-7 d-flex align-items-center mb-5">
                                                <span class="svg-icon svg-icon-4x me-4">
       <i class="fa-duotone fa-file-pdf fs-2hx" style="--fa-primary-color: #1A2BC2; --fa-secondary-color: #1A2BC2;"></i>
    </span>
                                        <span class="d-block fw-bold text-start">
                                                    <span class="text-dark fw-bolder d-block fs-3">${dataPDF.name}</span>
                                                    <span class="text-muted fw-bold fs-6">${auxSize}</span>
                                                </span>
                                    </a>
        
        `;
    } else {
        receiptDocumentDiv.innerHTML = `<p class="text-center bg-light py-4 w-100 m-0 border">${(language === "en" ? "The payment receipt hasn't been uploaded." : "El recibo de pago no se ha cargado.")}</p>`;
    }

    previewInvoice.value = data.invoice;
    previewDatePicker.setDate(data.date);
    previewExpirePicker.setDate(data.expire);
    previewAmount.value = data.amount;
    $(previewCurrency).val(data.currency).trigger("change");
    $(previewPayment).val(data.payments).trigger("change");
    $(previewExpense).val(data.expense).trigger("change");
    $(previewCompany).val(data.company).trigger("change");
    $(previewBranch).val(data.branch).trigger("change");
    previewNotes.value = data.notes;
    const conceptos = JSON.parse(data.concepts);
    previewConceptsTable.clear().draw();
    previewConceptsTable.rows.add(conceptos).draw();
    previewWithholding.value = data.withholding;
    previewTaxes.value = data.globaltax;
    calculateConceptsPreview();

    if (partner_data.tp_proveedor !== 3) {
        const elementos = previewForm.elements;
        for (let i = 0; i < elementos.length; i++) {
            elementos[i].disabled = true;
        }
        previewConceptForm.style.display = 'none';
    }
    previewSubmit.style.display = isForeign ? 'inline' : 'none';
    previewWithholding.disabled = !isForeign;
    previewTaxes.disabled = !isForeign;
    previewNotes.disabled = !isForeign;
    mdlPreview.show();
});

const previewConceptValidator = FormValidation.formValidation(
    previewConceptForm,
    {
        fields: {
            'preview-concept-description': {
                validators: {
                    notEmpty: {
                        message: (language === "en" ? "Required field" : "Campo requerido")
                    }
                }
            },
            'preview-concept-price': {
                validators: {
                    notEmpty: {
                        message: (language === "en" ? "Required field" : "Campo requerido")
                    },
                    greaterThan: {
                        min: 1,
                        message: (language === "en" ? "Please enter a value greater than 0" : "Por favor, introduzca un valor mayor que 0")
                    }
                }
            },
            'preview-concept-quantity': {
                validators: {
                    notEmpty: {
                        message: (language === "en" ? "Required field" : "Campo requerido")
                    },
                    greaterThan: {
                        min: 1,
                        message: (language === "en" ? "Please enter a value greater than 0" : "Por favor, introduzca un valor mayor que 0")
                    }
                }
            },
        },
        plugins: {
            trigger: new FormValidation.plugins.Trigger(),
            bootstrap: new FormValidation.plugins.Bootstrap5({
                rowSelector: '.fv-row',
                eleInvalidClass: '',
                eleValidClass: ''
            })
        }
    }
);

previewConceptSubmit.addEventListener('click', function (e) {
    e.preventDefault();
    if (previewConceptValidator) {
        previewConceptValidator.validate().then(function (status) {
            if (status === 'Valid') {
                previewConceptSubmit.setAttribute('data-kt-indicator', 'on');
                previewConceptSubmit.disabled = true;
                setTimeout(function () {
                    previewConceptSubmit.removeAttribute('data-kt-indicator');
                    previewConceptSubmit.disabled = false;

                    if (isConceptPreviewEditing) {
                        const index = previewConceptSubmitTitle.dataset.index;
                        const concept = {
                            concept: previewConceptDescription.value,
                            price: Number(previewConceptPrice.value),
                            quantity: Number(previewConceptQuantity.value)
                        }
                        previewConceptsTable.row(index).data(concept).draw();
                    } else {
                        const concept = {
                            concept: previewConceptDescription.value,
                            price: Number(previewConceptPrice.value),
                            quantity: Number(previewConceptQuantity.value)
                        }
                        previewConceptsTable.row.add(concept).draw();
                    }
                    calculateConceptsPreview();
                    conceptPreviewClearData();

                }, 1500);
            }
        });
    }
});
previewConceptUpdateCancel.addEventListener('click', function (e) {
    e.preventDefault();
    conceptPreviewClearData();
});


const previewValidator = FormValidation.formValidation(
    previewForm,
    {
        fields: {
            'preview-invoice': {
                validators: {
                    notEmpty: {
                        message: (language === "en" ? "Required field" : "Campo requerido")
                    }
                }
            },
            'preview-date': {
                validators: {
                    notEmpty: {
                        message: (language === "en" ? "Required field" : "Campo requerido")
                    },
                    greaterThan: {
                        min: 1,
                        message: (language === "en" ? "Please enter a value greater than 0" : "Por favor, introduzca un valor mayor que 0")
                    }
                }
            },
            'preview-amount': {
                validators: {
                    notEmpty: {
                        message: (language === "en" ? "Required field" : "Campo requerido")
                    },
                    greaterThan: {
                        min: 1,
                        message: (language === "en" ? "Please enter a value greater than 0" : "Por favor, introduzca un valor mayor que 0")
                    }
                }
            },
            'preview-currency': {
                validators: {
                    notEmpty: {
                        message: (language === "en" ? "Required field" : "Campo requerido")
                    }
                }
            },
            'preview-payment': {
                validators: {
                    notEmpty: {
                        message: (language === "en" ? "Required field" : "Campo requerido")
                    }
                }
            },
        },
        plugins: {
            trigger: new FormValidation.plugins.Trigger(),
            bootstrap: new FormValidation.plugins.Bootstrap5({
                rowSelector: '.fv-row',
                eleInvalidClass: '',
                eleValidClass: ''
            })
        }
    }
);
previewSubmit.addEventListener('click', function (e) {
    e.preventDefault();
    if (previewValidator) {
        previewValidator.validate().then(function (status) {
            if (status === 'Valid') {
                previewSubmit.setAttribute('data-kt-indicator', 'on');
                previewSubmit.disabled = true;
                setTimeout(function () {
                    previewSubmit.removeAttribute('data-kt-indicator');
                    previewSubmit.disabled = false;

                    if (isBillEditing) {

                    } else {
                        const conceptsData = conceptsTable.rows().data().toArray();
                        const billData = new FormData();
                        billData.append("partner", id_socio);
                        billData.append("invoice", billInvoice.value);
                        billData.append("date", billDate.value);
                        billData.append("expire", billExpire.value);
                        billData.append("amount", billAmount.value);
                        billData.append("currency", $(billCurrency).val());
                        billData.append("payments", $(billPayment).val());
                        billData.append("expense", $(billExpense).val());
                        billData.append("company", $(billCompany).val());
                        billData.append("branch", $(billBranch).val());
                        billData.append("concepts", JSON.stringify(conceptsData));
                        billData.append("notes", billNotes.value);
                        billData.append("withholding", billWithholding.value);
                        billData.append("globaltax", billTaxes.value);
                        billData.append('billPdf', billPdf.files[0]);
                        billData.append('billXml', billXml.files[0]);
                        billData.append('billOther', billOther.files[0]);

                        fetch('controller/guardar-factura.php', {
                            method: "POST",
                            body: billData
                        })
                            .then(response => response.json())
                            .then(response => {
                                if (response.estado === 200) {
                                    toastr.success(response.texto);
                                    mdlInvoiceForeign.hide();
                                } else {
                                    Swal.fire({
                                        text: "Lo sentimos, parece que se han detectado algunos errores, inténtalo de nuevo.",
                                        icon: "error",
                                        buttonsStyling: !1,
                                        confirmButtonText: "Entiendo",
                                        customClass: {confirmButton: "btn btn-primary"}
                                    })
                                }
                            });
                    }
                    billClearData();

                }, 1500);
            }
        });
    }
});

function conceptClearData() {
    isConceptEditing = false;
    conceptSubmitTitle.innerText = language === "en" ? "Add" : "Agregar";
    conceptSubmitIcon.innerHTML = '<i class="fa-duotone fa-plus" style="--fa-primary-color: #ffffff; --fa-secondary-color: #ffffff;"></i>';
    conceptSubmitTitle.setAttribute('data-index', null);
    conceptUpdateCancel.style.display = 'none';
    conceptForm.reset()
    conceptValidator.resetForm();
}

function conceptPreviewClearData() {
    isConceptPreviewEditing = false;
    previewConceptSubmitTitle.innerText = language === "en" ? "Add" : "Agregar";
    previewConceptSubmitIcon.innerHTML = '<i class="fa-duotone fa-plus" style="--fa-primary-color: #ffffff; --fa-secondary-color: #ffffff;"></i>';
    previewConceptSubmitTitle.setAttribute('data-index', null);
    previewConceptUpdateCancel.style.display = 'none';
    previewConceptForm.reset()
    previewConceptValidator.resetForm();
}

function billClearData() {
    isBillEditing = false;
    billForm.reset();
    conceptForm.reset();

    billSubtotal.value = null;
    billWithholding.value = null;
    billTaxes.value = null;
    billTotal.value = null;
    billTotalMsg.innerHTML = '';

    $(billCurrency).trigger("change");
    $(billPayment).trigger("change");
    $(billExpense).trigger("change");
    $(billCompany).trigger("change");
    $(billBranch).trigger("change");
    billValidator.resetForm();
    conceptValidator.resetForm();
    conceptsTable.clear().draw();
}

function calculateConcepts() {
    const conceptsData = conceptsTable.rows().data().toArray();
    if (conceptsData.length === 0) {
        billWithholding.disabled = true;
        billTaxes.disabled = true;
        billWithholding.value = null;
        billTaxes.value = null;
        billSubtotal.value = null;
        billTotal.value = null;
        return;
    }

    const subtotal = conceptsData.reduce((acc, concept) => {
        return acc + (concept.price * concept.quantity);
    }, 0);

    let traslados = 0;
    currentBill.conceptos.forEach(concepto => {
        traslados += parseFloat(concepto.impuestos[0].importeTraslado);
    });

    const withholdingAmount = traslados || 0;
    const taxesAmount = parseFloat(billTaxes.value) || 0;

    const total = subtotal + withholdingAmount - taxesAmount;

    billSubtotal.value = subtotal.toFixed(2);
    billTotal.value = total.toFixed(2);

    if (Number(billAmount.value) !== total) {
        billTotalMsg.innerHTML = `<span class="text-danger">El monto agregado no concuerda con el total de los conceptos.</span>`;
        billSubmit.disabled = true;
    } else {
        billTotalMsg.innerHTML = `<span class="text-success">El monto agregado concuerda con el total de los conceptos.</span>`;
        billSubmit.disabled = false;
    }
}

function calculateConceptsPreview() {
    const conceptsData = previewConceptsTable.rows().data().toArray();
    if (conceptsData.length === 0) {
        previewWithholding.disabled = true;
        previewTaxes.disabled = true;
        previewWithholding.value = null;
        previewTaxes.value = null;
        previewSubtotal.value = null;
        previewTotal.value = null;
        return;
    }

    const subtotal = conceptsData.reduce((acc, concept) => {
        return acc + (concept.price * concept.quantity);
    }, 0);
    const withholdingAmount = parseFloat(previewWithholding.value) || 0;
    const taxesAmount = parseFloat(previewTaxes.value) || 0;

    const total = subtotal + withholdingAmount - taxesAmount;

    previewSubtotal.value = subtotal.toFixed(2);
    previewTotal.value = total.toFixed(2);

    if (Number(previewAmount.value) !== total) {
        previewTotalMsg.innerHTML = `<span class="text-danger">El monto agregado no concuerda con el total de los conceptos.</span>`;
    } else {
        previewTotalMsg.innerHTML = `<span class="text-success">El monto agregado concuerda con el total de los conceptos.</span>`;
    }

}

billWithholding.addEventListener('input', calculateConcepts);
billTaxes.addEventListener('input', calculateConcepts);
previewWithholding.addEventListener('input', calculateConceptsPreview);
previewTaxes.addEventListener('input', calculateConceptsPreview);
billXml.addEventListener('change', function (e) {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (event) {
            const xmlString = event.target.result;
            parseXML(xmlString);
        };
        reader.readAsText(file);
    }
});

function parseXML(xmlString) {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlString, "text/xml");

    const comprobanteElement = xmlDoc.getElementsByTagName("cfdi:Comprobante")[0];

    let objResultado = {};
    objResultado.version = comprobanteElement.getAttribute("Version");
    objResultado.serie = comprobanteElement.getAttribute("Serie");
    objResultado.folio = comprobanteElement.getAttribute("Folio");
    objResultado.fecha = comprobanteElement.getAttribute("Fecha");
    objResultado.sello = comprobanteElement.getAttribute("Sello");
    objResultado.formaPago = comprobanteElement.getAttribute("FormaPago");
    objResultado.noCertificado = comprobanteElement.getAttribute("NoCertificado");
    objResultado.certificado = comprobanteElement.getAttribute("Certificado");
    objResultado.subTotal = comprobanteElement.getAttribute("SubTotal");
    objResultado.moneda = comprobanteElement.getAttribute("Moneda");
    objResultado.total = comprobanteElement.getAttribute("Total");
    objResultado.tipoDeComprobante = comprobanteElement.getAttribute("TipoDeComprobante");
    objResultado.exportacion = comprobanteElement.getAttribute("Exportacion");
    objResultado.metodoPago = comprobanteElement.getAttribute("MetodoPago");
    objResultado.lugarExpedicion = comprobanteElement.getAttribute("LugarExpedicion");

    const emisorElement = comprobanteElement.getElementsByTagName("cfdi:Emisor")[0];
    objResultado.emisor = {
        rfc: emisorElement.getAttribute("Rfc"),
        nombre: emisorElement.getAttribute("Nombre"),
        regimenFiscal: emisorElement.getAttribute("RegimenFiscal"),
    };

    const receptorElement = comprobanteElement.getElementsByTagName("cfdi:Receptor")[0];
    objResultado.receptor = {
        rfc: receptorElement.getAttribute("Rfc"),
        nombre: receptorElement.getAttribute("Nombre"),
        domicilioFiscalReceptor: receptorElement.getAttribute("DomicilioFiscalReceptor"),
        regimenFiscalReceptor: receptorElement.getAttribute("RegimenFiscalReceptor"),
        usoCFDI: receptorElement.getAttribute("UsoCFDI"),
    };

    const conceptosElement = comprobanteElement.getElementsByTagName("cfdi:Conceptos")[0];
    const conceptoElements = conceptosElement.getElementsByTagName("cfdi:Concepto");
    objResultado.conceptos = [];

    for (let i = 0; i < conceptoElements.length; i++) {
        let concepto = conceptoElements[i];
        let conceptoObj = {
            claveProdServ: concepto.getAttribute("ClaveProdServ"),
            cantidad: concepto.getAttribute("Cantidad"),
            claveUnidad: concepto.getAttribute("ClaveUnidad"),
            unidad: concepto.getAttribute("Unidad"),
            descripcion: concepto.getAttribute("Descripcion"),
            valorUnitario: concepto.getAttribute("ValorUnitario"),
            importe: concepto.getAttribute("Importe"),
            objetoImp: concepto.getAttribute("ObjetoImp"),
        };

        const impuestosElement = concepto.getElementsByTagName("cfdi:Impuestos")[0];
        const trasladosElement = impuestosElement.getElementsByTagName("cfdi:Traslados")[0];
        const trasladoElements = trasladosElement.getElementsByTagName("cfdi:Traslado");

        conceptoObj.impuestos = [];

        for (let j = 0; j < trasladoElements.length; j++) {
            let traslado = trasladoElements[j];
            conceptoObj.impuestos.push({
                base: traslado.getAttribute("Base"),
                impuesto: traslado.getAttribute("Impuesto"),
                tipoFactor: traslado.getAttribute("TipoFactor"),
                tasaOCuota: traslado.getAttribute("TasaOCuota"),
                importeTraslado: traslado.getAttribute("Importe"),
            });
        }

        objResultado.conceptos.push(conceptoObj);
    }

    const impuestosElementGlobal = comprobanteElement.getElementsByTagName("cfdi:Impuestos")[0];
    const trasladosElementGlobal = impuestosElementGlobal.getElementsByTagName("cfdi:Traslados")[0];
    const trasladoElementsGlobal = trasladosElementGlobal.getElementsByTagName("cfdi:Traslado");
    objResultado.impuestos = [];

    for (let k = 0; k < trasladoElementsGlobal.length; k++) {
        let trasladoGlobal = trasladoElementsGlobal[k];
        objResultado.impuestos.push({
            baseGlobal: trasladoGlobal.getAttribute("Base"),
            impuestoGlobal: trasladoGlobal.getAttribute("Impuesto"),
            tipoFactorGlobal: trasladoGlobal.getAttribute("TipoFactor"),
            tasaOCuotaGlobal: trasladoGlobal.getAttribute("TasaOCuota"),
            importeTrasladoGlobal: trasladoGlobal.getAttribute("Importe"),
        });
    }
    currentBill = objResultado;
    billInvoice.value = objResultado.folio;
    billDatePicker.setDate(objResultado.fecha);

    let diasDeCredito = parseInt(partner_data.dias_de_credito);
    let fecha = new Date(objResultado.fecha);
    fecha.setDate(fecha.getDate() + diasDeCredito);
    let nuevaFechaStr = fecha.toISOString();
    billExpirePicker.setDate(nuevaFechaStr);

    billAmount.value = objResultado.total;
    $(billCurrency).val(objResultado.moneda).trigger("change");
    $(billPayment).val(objResultado.metodoPago).trigger("change");
    conceptsTable.clear().draw();
    let traslados = 0;
    objResultado.conceptos.forEach(concepto => {
        const concept = {
            concept: concepto.descripcion,
            price: Number(concepto.valorUnitario),
            quantity: Number(concepto.cantidad)
        }

        concepto.impuestos.forEach(impuesto => {
            traslados += parseFloat(impuesto.importeTraslado);
        });

        conceptsTable.row.add(concept).draw();
    });
    billWithholding.value = traslados.toFixed(2);
    calculateConcepts();
    billValidator.validate();
}

function getInfo() {
    $.ajax({
        url: 'controller/get-info.php',
        type: 'POST',
        dataType: 'json',
        success: function (response) {
            if (!response.id) {
                window.location.href = "sing-in.html";
            } else {
                id_socio = response.partner;
                document.getElementById('spnNombreU').innerText += response.name;
                document.getElementById('spnCorreoU').innerText += response.email;
                cargarDatos(id_socio);
            }
        }
    });
}

function cargarDatos(socio) {
    $.ajax({
        url: 'controller/traerUnSocio.php',
        type: 'POST',
        data: {id: socio},
        dataType: 'json',
        success: function (response) {
            partner_data = response[0];
            isForeign = parseInt(partner_data.tp_proveedor) === 3;
            dvCapCfdi_xml.style.display = !isForeign ? 'inline' : 'inline';
            dvSpInvoice.style.display = !isForeign ? 'inline' : 'none';
            dvSpConcept.style.display = !isForeign ? 'inline' : 'none';
            dvSpCapConcepts.style.display = !isForeign ? 'inline' : 'none';

            billInvoice.disabled = !isForeign;
            billDate.disabled = !isForeign;
            billExpire.disabled = !isForeign;
            billAmount.disabled = !isForeign;
            billCurrency.disabled = !isForeign;
            billPayment.disabled = !isForeign;
            billExpense.disabled = isForeign;
            billCompany.disabled = isForeign;
            billBranch.disabled = isForeign;
            billNotes.disabled = !isForeign;
            conceptFormDiv.style.display = isForeign ? 'inline' : 'none';
            billWithholding.disabled = !isForeign;
            billTaxes.disabled = !isForeign;

        }
    });
}

conceptDescription.placeholder = language === "en" ? "Concept description" : "Descripción del concepto";
conceptPrice.placeholder = language === "en" ? "Unit price" : "Precio unitario";
conceptQuantity.placeholder = language === "en" ? "Quantity" : "Cantidad";
conceptSubmitTitle.innerText = language === "en" ? "Add" : "Agregar";
conceptUpdateCancel.title = language === "en" ? "Cancel" : "Cancelar";

billInvoice.placeholder = language === "en" ? "Invoice" : "Factura";
document.querySelector(`label[for="${billInvoice.id}"]`).textContent = language === "en" ? "Invoice" : "Factura";
billDate.placeholder = language === "en" ? "Date" : "Fecha";
document.querySelector(`label[for="${billDate.id}"]`).textContent = language === "en" ? "Date" : "Fecha";
billExpire.placeholder = language === "en" ? "Expire" : "Expira";
document.querySelector(`label[for="${billExpire.id}"]`).textContent = language === "en" ? "Expire" : "Expira";
billAmount.placeholder = language === "en" ? "Amount" : "Monto";
document.querySelector(`label[for="${billAmount.id}"]`).textContent = language === "en" ? "Amount" : "Monto";
document.querySelector(`label[for="${billCurrency.id}"]`).textContent = language === "en" ? "Currency" : "Moneda";
document.querySelector(`label[for="${billPayment.id}"]`).textContent = language === "en" ? "Payment terms" : "Condiciones de pago";
document.querySelector(`label[for="${billExpense.id}"]`).textContent = language === "en" ? "Expense concept" : "Concepto de gasto";
document.querySelector(`label[for="${billCompany.id}"]`).textContent = language === "en" ? "Company" : "Compañía";
document.querySelector(`label[for="${billBranch.id}"]`).textContent = language === "en" ? "Branch" : "Sucursal";

billNotes.placeholder = language === "en" ? "Notes" : "Notas";
document.querySelector(`label[for="${billNotes.id}"]`).textContent = language === "en" ? "Notes" : "Notas";