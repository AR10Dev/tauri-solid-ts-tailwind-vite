#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    #[cfg(debug_assertions)] // only enable instrumentation in development builds
    let devtools = tauri_plugin_devtools::init();

    let mut builder = tauri::Builder::default();

    #[cfg(debug_assertions)]
    {
        builder = builder.plugin(devtools);
    }

    builder
        // .plugin( /* Add your Tauri plugin here */ )
        // Add your commands here that you will call from your JS code
        // .invoke_handler(tauri::generate_handler![ /* Add your commands here */ ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
