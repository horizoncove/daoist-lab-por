import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { checkGeofence } from '@/utils/geofence';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { orderId, templeId, currentLat, currentLon, videoHash, spiritualName } = body;

    // 1. 查找道观并校验地理围栏
    const temple = await prisma.temple.findUnique({
      where: { id: templeId }
    });

    if (!temple) {
      return NextResponse.json({ error: 'Temple not found' }, { status: 404 });
    }

    const isWithin = checkGeofence(
      currentLat,
      currentLon,
      temple.lat,
      temple.lon,
      temple.radius
    );

    if (!isWithin) {
      return NextResponse.json(
        { error: 'Location mismatch. Ritual must be performed within temple grounds.' },
        { status: 403 }
      );
    }

    // 2. 模拟区块链交互 (PoR 核心逻辑)
    // 实际生产中这里应调用 ethers.js 或 solana-web3.js 触发上链
    const txHash = `0x${Math.random().toString(36).substring(2, 15)}${Math.random().toString(36).substring(2, 15)}`;

    // 3. 存储存证记录
    const record = await prisma.ritualRecord.create({
      data: {
        orderId,
        spiritualName,
        templeId,
        currentLat,
        currentLon,
        videoHash,
        txHash
      }
    });

    console.log(`[PoR] Record created for order: ${orderId}, txHash: ${txHash}`);

    return NextResponse.json({ success: true, record });
  } catch (error: any) {
    console.error('[API Error]', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
