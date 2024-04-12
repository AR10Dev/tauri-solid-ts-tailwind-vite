#[cfg_attr(mobile, tauri::mobile_entry_point)]

fn run() {
  tauri::Builder::default()
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}
