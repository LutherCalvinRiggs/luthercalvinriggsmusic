const merchandiseModule = (() => {

    function _createMerchandiseList() {
        const merchandiseList = document.createElement('section')
        merchandiseList.id = 'merchandise-list'
       
        

        return merchandiseList
    }


    function showMerchandiseList() {
        const appContentBlock = document.querySelector('#app-content')
        appContentBlock.removeChild(appContentBlock.childNodes[0])
        
        // _updateBackgroundImage(appContentBlock)

        const merchandiseList = _createMerchandiseList()
        appContentBlock.appendChild(merchandiseList)
    }
    
        function _updateBackgroundImage(appContentBlock) {
            appContentBlock.style.backgroundImage = "url('images/page-image-merchandise.jpg')"
        }

    return {
        showMerchandiseList
    }
})();


export { merchandiseModule }