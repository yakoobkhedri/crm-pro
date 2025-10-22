   document.addEventListener('DOMContentLoaded', function() {
            // انتخاب تمام فولدرها
            const folderBtns = document.querySelectorAll('.folderBtn');
            const backBtns = document.querySelectorAll('.back-btn');
            const folderViews = document.querySelectorAll('.folder-view');
            
            // اضافه کردن event listener برای هر فولدر
            folderBtns.forEach(btn => {
                btn.addEventListener('click', function() {
                    const folderId = this.getAttribute('data-folder');
                    
                    // مخفی کردن تمام ویوها
                    folderViews.forEach(view => {
                        view.classList.remove('active');
                    });
                    
                    // نمایش ویو فولدر انتخاب شده
                    document.getElementById(folderId + 'View').classList.add('active');
                });
            });
            
            // اضافه کردن event listener برای دکمه‌های بازگشت
            backBtns.forEach(btn => {
                btn.addEventListener('click', function() {
                    // مخفی کردن تمام ویوها
                    folderViews.forEach(view => {
                        view.classList.remove('active');
                    });
                    
                    // نمایش ویو اصلی
                    document.getElementById('mainView').classList.add('active');
                });
            });
        });