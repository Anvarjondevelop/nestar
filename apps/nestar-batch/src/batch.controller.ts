import { Controller, Get } from '@nestjs/common';
import { NestarBatchService } from './batch.service';

@Controller()
export class BatchController {
	constructor(private readonly nestarBatchService: NestarBatchService) {}

	@Get()
	getHello(): string {
		return this.nestarBatchService.getHello();
	}
}
