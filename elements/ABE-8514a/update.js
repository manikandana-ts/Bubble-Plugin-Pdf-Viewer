function(instance, properties, context) {
	var textname = "pdf_"+properties.pdf_viewer_id;
    var url_params  = properties.remove_top_toolbar ? '&toolbar=1' : '';
  	url_params +=  properties.remove_bookmark ? '&bookmark=1' : '';
    url_params +=  properties.remove_left_toggle ? '&lefttoggle=1' : '';
    url_params +=  properties.remove_presentation_mode ? '&presentation=1' : '';
    url_params +=  properties.remove_search ? '&search=1' : '';
    url_params +=  properties.remove_download ? '&download=1' : '';
    url_params +=  properties.remove_print ? '&print=1' : '';
    url_params +=  properties.remove_file_open ? '&open=1' : '';
    url_params +=  properties.remove_right_toggle ? '&righttoggle=1' : '';
    var page_to_fit =  properties.page_to_fit ? '#zoom=page-fit' : '';
	if(!instance.data.created){
      instance.data.created=true;
      var pdfviewer_ele = $('<iframe class="iframecontent" id="'+textname+'" src="https://s3.amazonaws.com/appforest_uf/f1606293474685x732653757445511700/viewer_full.html?'+url_params+'&file='+properties.pdf_url+page_to_fit+'"  width="100%" height="100%" frameborder="0" allowfullscreen></iframe>');
      instance.canvas.append(pdfviewer_ele);
    }else{
        $('#'+textname).attr('src', "https://s3.amazonaws.com/appforest_uf/f1606293474685x732653757445511700/viewer_full.html?"+url_params+'&file='+properties.pdf_url+page_to_fit);
    }

}