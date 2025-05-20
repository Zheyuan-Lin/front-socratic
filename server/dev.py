import sys
import time
from watchdog.observers import Observer
from watchdog.events import FileSystemEventHandler
import subprocess
import os
import signal

class ServerRestartHandler(FileSystemEventHandler):
    def __init__(self):
        self.process = None
        self.start_server()

    def start_server(self):
        if self.process:
            # Kill the existing process
            os.killpg(os.getpgid(self.process.pid), signal.SIGTERM)
            self.process.wait()
        
        print("\n=== Starting Server ===")
        # Start the server in a new process group
        self.process = subprocess.Popen(
            [sys.executable, 'server.py'],
            preexec_fn=os.setsid
        )

    def on_modified(self, event):
        if event.src_path.endswith('.py'):
            print(f"\n=== File changed: {event.src_path} ===")
            self.start_server()

def main():
    path = '.'
    event_handler = ServerRestartHandler()
    observer = Observer()
    observer.schedule(event_handler, path, recursive=True)
    observer.start()

    try:
        while True:
            time.sleep(1)
    except KeyboardInterrupt:
        observer.stop()
        if event_handler.process:
            os.killpg(os.getpgid(event_handler.process.pid), signal.SIGTERM)
    observer.join()

if __name__ == "__main__":
    main() 