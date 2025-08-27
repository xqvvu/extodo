up:
	docker compose -f=./server/compose.local.yml up -d

down:
	docker compose -f=./server/compose.local.yml down

clean:
	rm -rf ~/.container/extodo

dev:
	bun run dev

build:
	bun run build

lint:
	turbo run lint
