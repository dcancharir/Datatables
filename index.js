$(document).ready( function () {
 
    $.ajax({
        url: 'https://api.covid19api.com/summary',
        type: "GET",
        contentType: "application/json",
        beforeSend: function () {
            console.log('before');
            // if (opciones.loader) {
            //     block_general("body");
            // }
            // if (opciones.callBackBeforeSend != null) {
            //     opciones.callBackBeforeSend();
            // }
        },
        complete: function () {
         
            console.log('complete');
            // if (opciones.loader) {
            //     unblock("body");
            // }
            // if (opciones.callBackSComplete != null) {
            //     opciones.callBackSComplete();
            // }
        },
        success: function (data) {
            var jsonData=data.Countries;
                var table=$('#example').DataTable( {
                    "aaData": jsonData,
                    // 'data':jsonData,
                    "columns": [
                        { 'data': 'Country','title':'Country'},
                        { 'data': 'CountryCode','title':'CountryCode'},
                        { 'data': 'Slug' ,'title':'Slug'},
                        { 'data': 'NewConfirmed','title':'NewConfirmed' },
                        { 'data': 'TotalConfirmed','title':'TotalConfirmed' },
                        { 'data': 'NewDeaths' ,'title':'NewDeaths'},
                        { 'data': 'NewRecovered','title':'NewRecovered'},
                        { 'data': 'TotalRecovered','title':'TotalRecovered' },
                        { 'data': 'Date' ,'title':'Date'}
                    ],
                    "fnInitComplete": function(){
                                // Disable TBODY scoll bars
                                // $('.dataTables_scrollBody').css({
                                //     'overflow': 'hidden',
                                //     'border': '0'
                                // });
                                
                                // Enable TFOOT scoll bars
                                $('.dataTables_scrollFoot').css('overflow', 'auto');
                                
                                $('.dataTables_scrollHead').css('overflow', 'auto');
                                
                                // Sync TFOOT scrolling with TBODY
                                $('.dataTables_scrollFoot').on('scroll', function () {
                                    $('.dataTables_scrollBody').scrollLeft($(this).scrollLeft());
                                });      
                                
                                $('.dataTables_scrollHead').on('scroll', function () {
                                    $('.dataTables_scrollBody').scrollLeft($(this).scrollLeft());
                                });


                                //
                                setTimeout(function(){
                                    $('#example').DataTable().columns.adjust().draw();
                                    var metaUaCompat = $('meta[http-equiv=X-UA-Compatible]', top.document).attr('content');
                                    if (metaUaCompat && metaUaCompat.toLowerCase().indexOf("edge") < 0) {
                                        $('meta[http-equiv="X-UA-Compatible"]', top.document).attr('content', metaUaCompat + ',Edge');
                                        $('meta[http-equiv="X-UA-Compatible"]').attr('content', metaUaCompat + ', IE=Edge');
                                    }
                                },1000)
                    },
                    "scrollX": true,
                    "scrollCollapse": true,
                    "dom": 'Zlrtip',
                    "colResize": {
                        "tableWidthFixed": false,
                        //"handleWidth": 10,
                        "resizeCallback": function(column)
                        {
        
                        }
                    },
                    "searching":   false,
                    // "paging":   false,
                    "info":     false,
                    "deferRender": true,
                    "sScrollX": "190%",
                    // "responsive":true,
                    // "autoWidth":false,
                });
                console.log('sucess');
        },
        error: function (xmlHttpRequest, textStatus, errorThrow) {
            // unblock("body");
            console.warn('Message :', errorThrow);
        }
    });
    
} );
$(document).on('click','#cargarModal',function(e){
    e.preventDefault();
    $('#exampleModal').modal('show');
})
