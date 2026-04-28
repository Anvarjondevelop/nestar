import { Controller, Get, Logger } from '@nestjs/common';
import { BatchService } from './batch.service';
import { Cron, Interval, Timeout } from '@nestjs/schedule';
import { BATCH_ROLLBACK, BATCH_TOP_AGENTS, BATCH_TOP_PROPERTIES } from './lib/config';

@Controller()
export class BatchController {
	private logger: Logger = new Logger('BatchController'); //Logger classidan instance yaratamiz va unga BatchController nomini beramiz
	constructor(private readonly batchService: BatchService) {}
	@Timeout(1000)
	handleTimeout() {
		this.logger.debug('BATCH SERVER IS READY!');
	}

	// @Cron('*/20 * * * * *', { name: 'CRON_TEST' }) // Har 20 soniyada bir marta ishlaydi
	// public cronTest() {
	// 	this.logger['context'] = 'CRON_TEST';
	// 	this.logger.debug('Cron is working');
	// }

	@Cron('00 00 01 * * *', { name: BATCH_ROLLBACK })
	public async batchRollback() {
		try {
			this.logger['context'] = BATCH_ROLLBACK;
			this.logger.debug('EXECUTED!');
			await this.batchService.batchRollback();
		} catch (err) {
			this.logger.error(err);
		}
	}

	@Cron('20 00 01 * * *', { name: BATCH_TOP_PROPERTIES })
	public async batchTopProperties() {
		try {
			this.logger['context'] = BATCH_TOP_PROPERTIES;
			this.logger.debug('EXECUTED!');
			await this.batchService.batchTopProperties();
		} catch (err) {
			this.logger.error(err);
		}
	}

	@Cron('40 00 01 * * *', { name: BATCH_TOP_AGENTS })
	public async batchTopAgents() {
		try {
			this.logger['context'] = BATCH_TOP_AGENTS;
			this.logger.debug('EXECUTED!');
			await this.batchService.batchTopAgents();
		} catch (err) {
			this.logger.error(err);
		}
	}

	// @Interval(1000) // Har 1 soniyada bir marta ishlaydi
	// handleInterval() {
	// 	this.logger.debug('Interval is working...'); // Har intervalda log yozadi
	// }

	@Get()
	getHello(): string {
		return this.batchService.getHello();
	}
}
