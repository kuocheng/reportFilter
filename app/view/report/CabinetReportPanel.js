/*
 * File: app/view/report/CabinetReportPanel.js
 *
 * This file was generated by Sencha Architect version 2.2.3.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.2.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('MyApp.view.report.CabinetReportPanel', {
    extend: 'Ext.panel.Panel',

    itemId: 'idCabinetReportPanel',
    autoScroll: true,
    layout: {
        columns: 1,
        type: 'table'
    },
    title: '',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            dockedItems: [
                {
                    xtype: 'label',
                    colspan: 1,
                    rowspan: 1,
                    dock: 'top',
                    text: 'Cabinet Details Report'
                },
                {
                    xtype: 'toolbar',
                    colspan: 1,
                    rowspan: 1,
                    dock: 'top',
                    items: [
                        {
                            xtype: 'button',
                            itemId: 'idRunReportButton',
                            margin: '10 10 10 10 ',
                            padding: '10 10 10 10',
                            text: 'Run Report',
                            listeners: {
                                click: {
                                    fn: me.onIdRunReportClick,
                                    scope: me
                                }
                            }
                        },
                        {
                            xtype: 'button',
                            margin: '10 10 10 10',
                            padding: '10 10 10 10',
                            text: 'Save Settings'
                        },
                        {
                            xtype: 'button',
                            margin: '10 10 10 10',
                            padding: '10 10 10 10',
                            text: 'Clear Settings'
                        }
                    ]
                },
                {
                    xtype: 'label',
                    colspan: 1,
                    rowspan: 1,
                    dock: 'top',
                    padding: '10 10 10 10',
                    text: 'This report provides the details for the selected cabinets......'
                },
                {
                    xtype: 'panel',
                    dock: 'top',
                    itemId: 'idReportSettingsPanel',
                    layout: {
                        type: 'fit'
                    },
                    frameHeader: false,
                    title: 'Cabinet Filter',
                    items: [
                        {
                            xtype: 'checkboxfield',
                            itemId: 'idSelectAllCheckbox',
                            fieldLabel: '',
                            labelWidth: 1000,
                            boxLabel: 'Select All',
                            boxLabelAlign: 'before'
                        },
                        {
                            xtype: 'gridpanel',
                            height: 300,
                            itemId: 'idCabinetFilterPanel',
                            padding: '10 10 10 10',
                            header: false,
                            title: 'Cabinet report',
                            store: 'report.CabinetReportItem',
                            columns: [
                                {
                                    xtype: 'gridcolumn',
                                    maxWidth: 0,
                                    defaultWidth: 0,
                                    dataIndex: 'itemId',
                                    text: ''
                                },
                                {
                                    xtype: 'gridcolumn',
                                    dataIndex: 'location',
                                    text: 'Location'
                                },
                                {
                                    xtype: 'gridcolumn',
                                    dataIndex: 'itemClass',
                                    text: 'Class'
                                },
                                {
                                    xtype: 'gridcolumn',
                                    dataIndex: 'status',
                                    text: 'Status'
                                },
                                {
                                    xtype: 'gridcolumn',
                                    dataIndex: 'modelName',
                                    text: 'Name'
                                },
                                {
                                    xtype: 'gridcolumn',
                                    dataIndex: 'cabinetName',
                                    text: 'Cabinet Name'
                                },
                                {
                                    xtype: 'gridcolumn',
                                    dataIndex: 'rowLabel',
                                    text: 'Row Label'
                                },
                                {
                                    xtype: 'gridcolumn',
                                    dataIndex: 'grouping',
                                    text: 'Grouping'
                                }
                            ],
                            listeners: {
                                afterrender: {
                                    fn: me.onIdCabinetFilterPanelAfterRender,
                                    scope: me
                                }
                            }
                        }
                    ]
                },
                {
                    xtype: 'panel',
                    colspan: 1,
                    rowspan: 1,
                    dock: 'top',
                    itemId: 'idCabinetViewPanel',
                    padding: '10 10 10 10',
                    layout: {
                        columns: 2,
                        type: 'table'
                    },
                    title: 'Cabinet View',
                    items: [
                        {
                            xtype: 'radiogroup',
                            colspan: 2,
                            rowspan: 3,
                            itemId: 'idCabinetViewRadioGroup',
                            width: 400,
                            layout: {
                                columns: 3,
                                type: 'table'
                            },
                            fieldLabel: '',
                            items: [
                                {
                                    xtype: 'radiofield',
                                    colspan: 1,
                                    rowspan: 1,
                                    boxLabel: 'Front'
                                },
                                {
                                    xtype: 'radiofield',
                                    colspan: 1,
                                    rowspan: 1,
                                    minWidth: 100,
                                    boxLabel: 'Front Image'
                                },
                                {
                                    xtype: 'radiofield',
                                    boxLabel: 'Text'
                                },
                                {
                                    xtype: 'radiofield',
                                    colspan: 1,
                                    rowspan: 2,
                                    boxLabel: 'Back'
                                },
                                {
                                    xtype: 'radiofield',
                                    colspan: 1,
                                    rowspan: 1,
                                    boxLabel: 'Image'
                                }
                            ]
                        }
                    ]
                }
            ],
            listeners: {
                afterrender: {
                    fn: me.onPanelAfterRender,
                    scope: me
                }
            }
        });

        me.callParent(arguments);
    },

    onIdRunReportClick: function(button, e, eOpts) {
        var me = this;

        //me.getController('report.CabinetReportController').fireEvent('initCabinetReportGrid');
    },

    onIdCabinetFilterPanelAfterRender: function(component, eOpts) {

    },

    onPanelAfterRender: function(component, eOpts) {
        console.log("Panel after render on CabinetReportPanel");

        //alert("test launch!");
        //init controller
        var me = this;

        //me.getContr.fireEvent('initCabinetReportGrid');
        //me.getController('report.CabinetReportController').initCabinetReportGrid();
        //MyApp.getController('report.CabinetReportController').initCabinetReportGrid();
    }

});