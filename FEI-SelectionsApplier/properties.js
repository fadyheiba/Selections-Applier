define(['jquery','underscore','qlik','ng!$q'], function ($, _, qlik, $q) {
    var getFieldList = function () {
        var defer = $q.defer();
        app.getList( 'FieldList', function (items) {
            defer.resolve( items.qFieldList.qItems.map( function (item) {
                return {
                    value: item.qName,
                    label: item.qName
                }
            }));
        });
        return defer.promise;
    };

    var settingsDefinition = {
        uses: 'settings',
        type: "items",
        items: {
            fieldSelection: {
                label: 'Field Selection',
                type: 'items',
                items: {                
                    list: {
                        type: "string",
                        label: "Field",
                        ref: "field",
                        defaultValue: '',
                        expression:  "optional"
                    },
                    // isNumeric: {
                    //     type: "string",
                    //     label: "Numeric?",
                    //     ref: "isNumeric",
                    //     defaultValue: 0,
                    //     expression:  "optional"
                    // }
                }
            }
        }
    };

    return {
        type: "items",
        component: "accordion",
        items: {
            settings: settingsDefinition
        }
    }

});