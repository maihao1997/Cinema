bootstrap:
	npm install
	docker-compose up -d --remove-orphans

stop:
	docker-compose stop

logs:
	docker-compose logs -f
	
down:
	docker-compose down

ps:
	docker-compose ps

dev_up:
	docker-compose up -d --remove-orphans
	npm run start:dev

test_up:
	docker-compose up -d --remove-orphans
	npm run test:e2e
